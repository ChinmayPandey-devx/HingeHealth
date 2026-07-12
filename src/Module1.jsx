import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronRight, AlertTriangle, ArrowRight, XCircle, Info, Stethoscope, Star } from 'lucide-react';

export default function Module1({ isAfter }) {
  const [step, setStep] = useState('intake'); // intake, instant (before), flagged (after), reviewed (after)
  
  // Reset step when toggling before/after
  useEffect(() => {
    setStep('intake');
  }, [isAfter]);

  const handleContinue = () => {
    if (isAfter) {
      setStep('flagged');
    } else {
      setStep('instant');
    }
  };

  const simulateReview = () => {
    setStep('reviewed');
  };

  return (
    <div className="module-content fade-in p-4">
      {step === 'intake' && (
        <div className="fade-in">
          <div className="mb-4">
            <div className="flex justify-between text-meta mb-2">
              <span>Step 3 of 4</span>
              <span>75%</span>
            </div>
            <div className="progress-bg">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div className="card text-left">
            <h2 className="text-xl mb-4">Tell us about your condition</h2>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[var(--color-teal)] shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-sm text-meta">Primary complaint</div>
                  <div className="font-medium">Lower back pain</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[var(--color-teal)] shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-sm text-meta">Pain level</div>
                  <div className="font-medium">6/10</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[var(--color-teal)] shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-sm text-meta">Prior surgeries</div>
                  <div className="font-medium">L4-L5 spinal fusion — 2021</div>
                </div>
              </div>
            </div>
            
            <button className="btn-primary" onClick={handleContinue}>
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 'instant' && !isAfter && (
        <div className="fade-in">
          <div className="text-center mb-6 mt-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-teal-light)] text-[var(--color-teal)] mb-3">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl mb-1">Your program is ready!</h2>
            <p>We've created your personalized exercise plan</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="card p-4">
              <div className="font-medium">Cat-Cow Stretch</div>
              <div className="text-sm text-meta">3 sets × 10 reps</div>
            </div>
            <div className="card p-4 border-l-4 border-l-[var(--color-red)]">
              <div className="font-medium flex justify-between">
                Forward Fold <AlertTriangle size={16} className="text-[var(--color-red)]" />
              </div>
              <div className="text-sm text-meta">3 sets × 8 reps</div>
            </div>
            <div className="card p-4">
              <div className="font-medium">Seated Hamstring Stretch</div>
              <div className="text-sm text-meta">3 sets × 12 reps</div>
            </div>
          </div>
          
          <button className="btn-primary mb-6">Start My First Session</button>
          
          <div className="card bg-white border border-[var(--color-border)] p-4">
            <div className="flex text-[var(--color-amber)] mb-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} className="text-[var(--color-border)]" />
              <Star size={16} className="text-[var(--color-border)]" />
              <Star size={16} className="text-[var(--color-border)]" />
              <Star size={16} className="text-[var(--color-border)]" />
            </div>
            <p className="text-sm mb-2 italic">"I had spinal surgery and the app assigned me exercises that my surgeon specifically told me to avoid. Nobody read my intake history. This felt unsafe."</p>
            <div className="text-xs text-meta">— Verified App Store Review</div>
          </div>
          
          <div className="impact-label current mt-4">
            <AlertTriangle size={20} className="shrink-0" />
            <div>
              <strong>Current</strong> — Complex history collected, then ignored. Auto-assignment carries clinical risk.
            </div>
          </div>
        </div>
      )}

      {step === 'flagged' && isAfter && (
        <div className="slide-up">
          <div className="card border-l-4 border-l-[var(--color-teal)] text-left mb-6">
            <div className="flex gap-3 mb-3">
              <Stethoscope className="text-[var(--color-charcoal)]" size={24} />
              <h2 className="text-xl">We noticed something important</h2>
            </div>
            <p className="mb-4">You mentioned a prior L4-L5 spinal fusion. This means your program needs to be designed by a senior physical therapist, not auto-assigned.</p>
            
            <div className="card-info">
              <div className="font-bold mb-3 text-[var(--color-charcoal)]">What happens next:</div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-sm">Your intake has been flagged for senior PT review</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={16} className="text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-sm">Dr. Meera Patel (Senior PT, 12 years MSK experience) will review your history</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-[var(--color-amber)] shrink-0 mt-0.5" />
                  <span className="text-sm">You'll receive a custom program within 24 hours</span>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-center text-[var(--color-teal)] mb-4">
              This extra step keeps you safe. We take surgical histories seriously.
            </p>
            <button className="btn-secondary w-full justify-between">
              View what to expect <ChevronRight size={18} />
            </button>
          </div>
          
          <button className="btn-secondary" onClick={simulateReview} style={{ borderStyle: 'dashed' }}>
            Simulate 24h Review Complete
          </button>
        </div>
      )}

      {step === 'reviewed' && isAfter && (
        <div className="slide-up">
          <div className="flex justify-center mb-4">
            <div className="badge badge-teal pulse-once">
              <Stethoscope size={14} /> Senior PT Designed — Not Auto-Assigned
            </div>
          </div>
          
          <div className="card border-l-4 border-l-[var(--color-teal)] p-4 mb-6">
            <div className="flex items-center gap-2 font-bold mb-3 text-lg">
              <CheckCircle2 className="text-[var(--color-teal)]" size={20} /> Your intake has been reviewed
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-charcoal)] text-white flex items-center justify-center text-xs font-bold">
                MP
              </div>
              <div className="text-sm">
                <div><strong>Reviewed by:</strong> Dr. Meera Patel, DPT</div>
                <div className="text-meta">July 14, 2026 at 10:22 AM</div>
              </div>
            </div>
            <div className="bg-[var(--color-card-bg)] p-3 rounded-lg text-sm italic border border-[var(--color-border)]">
              "Given Sarah's L4-L5 fusion history, we have excluded all forward flexion movements and high-load lumbar exercises. Program is customized for post-surgical recovery."
            </div>
          </div>
          
          <h3 className="font-bold mb-3 text-left">Your Customized Plan</h3>
          <div className="space-y-3 mb-6">
            <div className="card p-4 animate-stagger-1 text-left">
              <div className="font-bold">Pelvic Tilt <span className="font-normal text-meta text-sm ml-2">3 sets × 10 reps</span></div>
              <div className="flex items-center gap-1 text-[var(--color-teal)] text-xs font-bold mt-1 mb-2">
                <CheckCircle2 size={12} /> Safe for spinal fusion
              </div>
              <div className="text-xs text-meta bg-[var(--color-card-bg)] p-2 rounded">PT note: Gentle activation without spinal flexion — ideal starting point</div>
            </div>
            <div className="card p-4 animate-stagger-2 text-left">
              <div className="font-bold">Supine Knee-to-Chest <span className="font-normal text-meta text-sm ml-2">3 sets × 8 reps</span></div>
              <div className="flex items-center gap-1 text-[var(--color-teal)] text-xs font-bold mt-1 mb-2">
                <CheckCircle2 size={12} /> Modified for post-surgical
              </div>
              <div className="text-xs text-meta bg-[var(--color-card-bg)] p-2 rounded">PT note: Single leg only — avoids bilateral lumbar load</div>
            </div>
            <div className="card p-4 animate-stagger-3 text-left">
              <div className="font-bold">Glute Bridge <span className="font-normal text-meta text-sm ml-2">3 sets × 12 reps</span></div>
              <div className="flex items-center gap-1 text-[var(--color-teal)] text-xs font-bold mt-1 mb-2">
                <CheckCircle2 size={12} /> Posterior chain focus
              </div>
              <div className="text-xs text-meta bg-[var(--color-card-bg)] p-2 rounded">PT note: Builds lumbar support without flexion stress</div>
            </div>
          </div>
          
          <div className="card bg-[var(--color-card-bg)] border border-[var(--color-border)] p-0 overflow-hidden mb-6">
            <div className="flex text-xs text-left">
              <div className="flex-1 p-3 border-r border-[var(--color-border)]">
                <div className="font-bold text-[var(--color-red)] mb-2">❌ Would have been assigned</div>
                <ul className="text-meta space-y-1">
                  <li>Forward Fold</li>
                  <li>Cat-Cow</li>
                  <li>Standard Deadlift</li>
                </ul>
              </div>
              <div className="flex-1 p-3 bg-[var(--color-teal-light)]">
                <div className="font-bold text-[var(--color-teal)] mb-2">✅ Actually assigned</div>
                <ul className="text-[var(--color-teal)] font-medium space-y-1">
                  <li>Pelvic Tilt</li>
                  <li>Single Knee-to-Chest</li>
                  <li>Glute Bridge</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="impact-label proposed mb-6">
            <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
            <div>
              <strong>Proposed</strong> — Complex history triggers PT review. Safe program, not a generic one.
            </div>
          </div>

          <div className="text-left mt-8 mb-4">
            <h3 className="font-bold mb-3 border-b pb-2">Impact Estimate</h3>
            <div className="space-y-3">
              <div className="card p-3 flex gap-3 items-center">
                <div className="text-2xl">🏥</div>
                <div className="text-sm">Members with prior surgeries are <strong>3.2x more likely to churn</strong> if first exercise feels unsafe</div>
              </div>
              <div className="card p-3 flex gap-3 items-center">
                <div className="text-2xl">⚖️</div>
                <div className="text-sm">Clinical risk from auto-assigning post-surgical members is the <strong>highest liability exposure</strong></div>
              </div>
              <div className="card p-3 flex gap-3 items-center">
                <div className="text-2xl">✅</div>
                <div className="text-sm">Visible PT review confirmation <strong>increases member trust scores</strong> by est. 28%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
