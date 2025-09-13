import React from 'react';
import { Card } from '@/components/ui/card';

import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamSetupProps {
  numberOfTeams: number;
  setNumberOfTeams: (count: number) => void;
  teamNames: string[];
  setTeamNames: (names: string[]) => void;
  onReady: () => void;
  onBack: () => void;
}

const TeamSetup: React.FC<TeamSetupProps> = ({
  numberOfTeams,
  setNumberOfTeams,
  teamNames,
  setTeamNames,
  onReady,
  onBack,
}) => {
  const teamOptions = ['It’s just me!', 'Two teams', 'Three teams', 'Four teams'];

  const handleTeamOptionClick = (count: number) => {
    // Immediately update parent's pending state
    setNumberOfTeams(count);
    if (count === 1) {
      setTeamNames(['You']);
    } else {
      setTeamNames(Array(count).fill('').map((_, i) => `Team ${i + 1}`));
    }
  };

  const handleNameChange = (index: number, value: string) => {
    const updated = [...teamNames];
    updated[index] = value;
    setTeamNames(updated);
  };

return (
  <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-4 relative">
    {/* Navigation Buttons */}
    <div className="absolute top-4 left-4 z-20 flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Home"
        onClick={() => {
          if (window.confirm('Are you sure you want to Exit Game?')) {
            window.location.reload();
          }
        }}
      >
        <Home className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Back"
        onClick={onBack}
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
    </div>
    
    <Card className="w-full max-w-md bg-[#242424] shadow-xl border border-[#333] rounded-[20px] p-8">
      <h2 className="text-2xl font-libertinus mb-4 text-center">Select Number of Teams</h2>
        <div className="flex flex-col items-center gap-2 mb-6 w-full max-w-xs mx-auto">
          {teamOptions.map((label, idx) => (
            <button
              key={idx}
              onClick={() => handleTeamOptionClick(idx + 1)}
              className={`w-full py-2 px-4 rounded ${
                numberOfTeams === idx + 1 || (numberOfTeams === 0 && idx === 0)
                  ? 'bg-[#E7E6E0] text-[#0C0C0C]'
                  : 'bg-[#242424] text-[#E7E6E0] hover:bg-[#E7E6E0] hover:text-[#0C0C0C]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {numberOfTeams > 1 && (
          <>
            <h3 className="text-lg font-semibold mb-2">Team Names</h3>
            <div className="flex flex-col items-center gap-2 mb-6 w-full max-w-xs mx-auto">
              {teamNames.map((name, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={name}
                  onChange={e => handleNameChange(idx, e.target.value)}
                  placeholder={`Team ${idx + 1}`}
                  className="p-2 rounded bg-white text-black"
                />
              ))}
            </div>
          </>
        )}

        <div className="flex flex-col items-center">
          <button
            onClick={onReady}
            className="py-2 px-6 rounded bg-[#91a945] hover:bg-[#7a8f3a] text-[#546b09] text-lg font-bold"
          >
            Ready!
          </button>
        </div>
      </Card>
    </div>
  );
};

export default TeamSetup;