import logoPng from '@/assets/download.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} bg-black rounded-md p-0.5`}>
        <img 
          src={logoPng} 
          alt="HackShastra Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <h2 className="text-primary text-xl font-semibold tracking-wide font-heading">HACKSHASTRA SRM-AP</h2>
      )}
    </div>
  );
};

export default Logo;
