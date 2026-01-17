'use client';
import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

interface VideoCardProps {
    video: {
        id: number;
        url: string;
        title?: string;
        student?: string;
    };
    index?: number;
    vertical?: boolean;
}

export const VideoCard = ({ video, index = 0, vertical = false }: VideoCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const playerRef = useRef<any>(null);

    const videoUrl = video.url
        ? `${video.url}${video.url.includes('?') ? '&' : '?'}background=1`
        : '';

    useEffect(() => {
        if (!videoUrl || !iframeRef.current) return;

        const player = new Player(iframeRef.current);
            playerRef.current = player;

            (async () => {
            try {
                // First let Vimeo boot with background mode
                await new Promise(r => setTimeout(r, 150));

                // Then force the state you actually want
                await player.setMuted(true);
                await player.pause();

                // Sync React to the real player state
                setIsMuted(true);
                setIsPlaying(false);
            } catch {}
            })();

        const syncPlay = async () => {
            try {
                const paused = await player.getPaused();
                setIsPlaying(!paused);
            } catch {}
        };

        const syncMute = async () => {
            try {
                const muted = await player.getMuted();
                setIsMuted(!!muted);
            } catch {}
        };

        player.on('play', syncPlay);
        player.on('pause', syncPlay);
        player.on('volumechange', syncMute);

        return () => {
            player.off('play', syncPlay);
            player.off('pause', syncPlay);
            player.off('volumechange', syncMute);
            try {
                player.unload();
            } catch {}
            playerRef.current = null;
        };
    }, [videoUrl]);

    const togglePlay = async () => {
        const player = playerRef.current;
        if (!player) return;

        try {
            const paused = await player.getPaused();
            if (paused) {
                await player.setVolume(1).catch(() => {});
                await player.play();
            } else {
                await player.pause();
            }
        } catch {}
    };

    const toggleMute = async () => {
        const player = playerRef.current;
        if (!player) return;

        try {
            const muted = await player.getMuted();
            await player.setMuted(!muted);
        } catch {}
    };

    if (!videoUrl) {
        return (
            <div className={`w-full m-4 rounded-3xl overflow-hidden bg-gray-200 transition duration-300`}>
                <div
                    className={`relative flex items-center justify-center ${
                        vertical ? 'pt-[177.78%]' : 'pt-[56.25%]'
                    }`}
                >
                    <p className="text-gray-500 text-sm p-4">Video Placeholder</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full rounded-lg bg-white transition duration-300 object-fill overflow-hidden border">
            <div className={`relative ${vertical ? 'pt-[177.78%]' : 'pt-[56.25%]'}`}>
                <iframe
                    ref={iframeRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black"
                    src={videoUrl}
                    title={video.title || 'Student Creation Video'}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />

                <button
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    onClick={toggleMute}
                    className={`absolute z-20 bg-transparent rounded-full flex items-center justify-center transition hover:scale-105 ${
                        vertical ? 'top-1 right-1 p-1' : 'top-3 right-2 p-2'
                    }`}
                >
                    {isMuted ? (
                        <img
                            src="/icons/muted.svg"
                            alt="Muted"
                            className={`drop-shadow-[0_0_6px_rgba(0,0,0,0.35)] ${
                                vertical ? 'h-4 w-4' : 'h-7 w-7'
                            }`}
                        />
                    ) : (
                        <img
                            src="/icons/unmuted.svg"
                            alt="Unmuted"
                            className={`drop-shadow-[0_0_6px_rgba(0,0,0,0.35)] ${
                                vertical ? 'h-4 w-4' : 'h-7 w-7'
                            }`}
                        />
                    )}
                </button>

                <button
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    onClick={togglePlay}
                    className={`absolute z-20 bg-transparent rounded-full flex items-center justify-center transition hover:scale-105 ${
                        vertical ? 'bottom-1 right-1 p-1' : 'bottom-4 right-4 p-2'
                    }`}
                >
                    {isPlaying ? (
                        <img
                            src="/icons/pauseButton.svg"
                            alt="Pause"
                            className={`drop-shadow-[0_0_6px_rgba(0,0,0,0.35)] ${
                                vertical ? 'h-3 w-3' : 'h-5 w-5'
                            }`}
                        />
                    ) : (
                        <img
                            src="/icons/playButton.svg"
                            alt="Play"
                            className={`drop-shadow-[0_0_6px_rgba(0,0,0,0.35)] ${
                                vertical ? 'h-3 w-3' : 'h-5 w-5'
                            }`}
                        />
                    )}
                </button>
            </div>
        </div>
    );
};
