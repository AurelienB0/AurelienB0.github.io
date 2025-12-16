interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-[180px] left-0 right-0 z-20 h-1 bg-gray-200">
      <div 
        className="h-full bg-indigo-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}