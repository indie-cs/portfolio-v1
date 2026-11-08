import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function MusicPlayer({ title, artist, src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const handleTimeUpdate = (e) => {
    const audio = e.currentTarget;
    setProgress(
      audio.duration ? (audio.currentTime / audio.duration) * 100 : 0
    );
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-sage/5 p-3.5">
      <div className="h-20 rounded-lg bg-linear-to-br from-[#1b2a3a] via-[#14201f] to-[#0f1a17]" />
      <div className="leading-snug">
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="text-xs text-muted">{artist}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="flex size-11 shring-0 cursor-pointer items-center justify-center rounded-full bg-sage text-night transition hover:brightness-110"
        >
          {playing ? (
            <Pause size={16} fill="currentColor" />
          ) : (
            <Play size={16} fill="currentColor" />
          )}
        </button>
        <div className="h-1 flex-1 rounded-full bg-ink/15">
          <div
            className="h-1 rounded-full bg-sage"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-[11px] text-muted">Music never starts on its own.</p>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}
