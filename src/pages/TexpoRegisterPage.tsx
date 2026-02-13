import { useEffect } from 'react';

export default function TexpoRegisterPage() {
  useEffect(() => {
    // Redirect to Unstop registration page
    window.location.href = 'https://unstop.com/competitions/texpo-2026-student-innovation-and-industry-technology-expo-srm-university-srmap-andhra-pradesh-1638340';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Redirecting to Registration...</h1>
        <p className="text-muted-foreground">
          If you are not redirected automatically,{' '}
          <a 
            href="https://unstop.com/competitions/texpo-2026-student-innovation-and-industry-technology-expo-srm-university-srmap-andhra-pradesh-1638340"
            className="text-primary underline hover:text-primary/80"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
