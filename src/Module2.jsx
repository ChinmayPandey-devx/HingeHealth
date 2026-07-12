import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Info, ArrowRight, ShieldCheck, ShieldAlert, AlertOctagon, RefreshCw, X } from 'lucide-react';

export default function Module2({ isAfter }) {
  const [coverageState, setCoverageState] = useState('healthy'); // healthy, risk, changed
  const [showModal, setShowModal] = useState(false);
  const [gaugeValue, setGaugeValue] = useState(87);

  useEffect(() => {
    if (isAfter) {
      if (coverageState === 'healthy') setGaugeValue(87);
      if (coverageState === 'risk') setGaugeValue(61);
      if (coverageState === 'changed') setGaugeValue(23);
    }
  }, [isAfter, coverageState]);

  const renderGauge = (value) => {
    const strokeDashoffset = 283 - (283 * value) / 100;
    let colorClass = 'gauge-fill';
    let needleColor = 'var(--color-teal)';
    if (value <= 30) {
      colorClass += ' red';
      needleColor = 'var(--color-red)';
    } else if (value <= 65) {
      colorClass += ' amber';
      needleColor = 'var(--color-amber)';
    }

    const rotation = (value / 100) * 180;

    return (
      <div className="relative w-48 h-24 mx-auto mb-6">
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
          <path className="gauge-bg" d="M 10 50 A 40 40 0 0 1 90 50" />
          <path className={`gauge-fill ${colorClass.split(' ')[1] || ''}`} d="M 10 50 A 40 40 0 0 1 90 50" style={{ strokeDashoffset }} />
          {/* Needle */}
          <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '50px 50px', transition: 'transform 800ms ease-out' }}>
            <circle cx="20" cy="50" r="3" fill={needleColor} />
            <polygon points="20,48 20,52 50,50" fill={needleColor} />
          </g>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-4 text-center">
          <div className="text-3xl font-bold" style={{ color: needleColor }}>{value}%</div>
          <div className="text-[10px] text-meta uppercase tracking-wide mt-1 w-32">Eligibility Confidence</div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-bold">
          <span className="text-[var(--color-red)]">Needs Review</span>
          <span className="text-[var(--color-amber)]">Monitor</span>
          <span className="text-[var(--color-teal)]">Confirmed</span>
        </div>
      </div>
    );
  };

  return (
    <div className="module-content fade-in p-4 text-left">
      {!isAfter && (
        <div className="fade-in">
          <h2 className="text-xl mb-4 font-bold">Sarah Mitchell</h2>
          <div className="text-sm text-meta mb-6">Aetna PPO via Employer</div>

          <div className="card text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-teal-light)] text-[var(--color-teal)] mb-3">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl text-[var(--color-teal)] mb-2 font-bold">Coverage Verified</h3>
            <p className="text-sm mb-4">Your Hinge Health program is covered by your employer plan</p>
            <div className="text-xs text-meta mb-4">Verified: March 2026</div>
            <button className="text-sm font-bold text-[var(--color-grey)] underline">Learn More</button>
          </div>

          <div className="my-8 text-center text-meta text-sm italic">
            Six months later (simulated)...
          </div>

          <div className="card bg-white border border-[var(--color-border)] p-4">
            <div className="flex text-[var(--color-amber)] mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className={i === 1 ? "fill-current" : "text-[var(--color-border)]"} />)}
            </div>
            <p className="text-sm mb-2 italic">"I was told I was covered. Used the program for months. Then got a bill. I never would have continued if I knew I'd be charged. Feeling completely misled."</p>
            <div className="text-xs text-meta">— Verified App Store Review</div>
          </div>

          <div className="impact-label current mt-4">
            <AlertTriangle size={20} className="shrink-0" />
            <div>
              <strong>Current</strong> — Static coverage label. No re-verification. Bill arrives as a complete surprise.
            </div>
          </div>
        </div>
      )}

      {isAfter && (
        <div className="fade-in">
          {/* Sub-tabs */}
          <div className="flex gap-2 mb-6">
            <button 
              onClick={() => setCoverageState('healthy')}
              className={`flex-1 py-2 px-1 text-xs rounded-lg font-bold border flex items-center justify-center gap-1 ${coverageState === 'healthy' ? 'bg-[var(--color-teal-light)] text-[var(--color-teal)] border-[var(--color-teal)]' : 'bg-white border-[var(--color-border)] text-meta'}`}
            >
              <ShieldCheck size={14} /> Healthy
            </button>
            <button 
              onClick={() => setCoverageState('risk')}
              className={`flex-1 py-2 px-1 text-xs rounded-lg font-bold border flex items-center justify-center gap-1 ${coverageState === 'risk' ? 'bg-[#FEF3C7] text-[var(--color-amber)] border-[var(--color-amber)]' : 'bg-white border-[var(--color-border)] text-meta'}`}
            >
              <ShieldAlert size={14} /> At Risk
            </button>
            <button 
              onClick={() => setCoverageState('changed')}
              className={`flex-1 py-2 px-1 text-xs rounded-lg font-bold border flex items-center justify-center gap-1 ${coverageState === 'changed' ? 'bg-[#FEE2E2] text-[var(--color-red)] border-[var(--color-red)]' : 'bg-white border-[var(--color-border)] text-meta'}`}
            >
              <AlertOctagon size={14} /> Changed
            </button>
          </div>

          <div className="card relative overflow-hidden">
            <h3 className="font-bold text-center mb-6 text-lg">Your Coverage Status</h3>
            
            {renderGauge(gaugeValue)}
            
            <div className="mt-12 text-center text-sm border-b pb-4 mb-4">
              <div className="font-bold flex items-center justify-center gap-2 mb-1">
                {coverageState === 'healthy' && <><CheckCircle2 size={16} className="text-[var(--color-teal)]"/> Coverage confirmed with Aetna — July 1, 2026</>}
                {coverageState === 'risk' && <><RefreshCw size={16} className="text-[var(--color-amber)] animate-spin-slow"/> Re-verifying with Aetna — July 14, 2026</>}
                {coverageState === 'changed' && <><X size={16} className="text-[var(--color-red)]"/> Coverage change detected — July 14, 2026</>}
              </div>
              <div className="text-meta">Next re-verification: August 1, 2026</div>
              <div className="text-meta">Plan year: Jan 2026 — Dec 2026</div>
              <div className="font-medium mt-2">Sessions used: 8 of unlimited</div>
            </div>

            {/* Dynamic Content Based on State */}
            {coverageState === 'healthy' && (
              <div className="slide-up">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-sm animate-stagger-1">
                    <CheckCircle2 size={16} className="text-[var(--color-teal)]" />
                    <span><strong>Employer enrollment:</strong> Confirmed (June 30)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm animate-stagger-2">
                    <CheckCircle2 size={16} className="text-[var(--color-teal)]" />
                    <span><strong>Insurance plan active:</strong> Confirmed (July 1)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm animate-stagger-3">
                    <CheckCircle2 size={16} className="text-[var(--color-teal)]" />
                    <span><strong>MSK benefit included:</strong> Confirmed (July 1)</span>
                  </div>
                </div>
                <div className="bg-[var(--color-teal-light)] text-[var(--color-teal)] p-3 rounded-lg text-xs font-medium flex items-start gap-2">
                  <RefreshCw size={14} className="shrink-0 mt-0.5" />
                  We re-verify your coverage monthly so you're never surprised by a bill.
                </div>
              </div>
            )}

            {coverageState === 'risk' && (
              <div className="slide-up">
                <div className="bg-[#FEF3C7] border border-[var(--color-amber)] rounded-lg p-4 mb-4">
                  <h4 className="font-bold flex items-center gap-2 text-[var(--color-amber)] mb-2">
                    <AlertTriangle size={18} /> Your coverage needs attention
                  </h4>
                  <div className="text-sm space-y-2">
                    <p>Your employer's plan year renews August 1 — <strong>18 days away</strong></p>
                    <p>We're re-verifying your eligibility with Aetna. This is routine.</p>
                    <p className="font-medium">What this means for you:</p>
                    <p>Continue your program as normal. We'll confirm your coverage before August 1.</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-[var(--color-teal)]" />
                    <span><strong>Employer enrollment:</strong> Confirmed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <RefreshCw size={16} className="text-[var(--color-amber)]" />
                    <span><strong>Insurance plan active:</strong> Re-verifying (due Aug 1)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-meta">
                    <div className="w-4 flex justify-center text-lg leading-none">⏳</div>
                    <span><strong>MSK benefit renewal:</strong> Pending rollover</span>
                  </div>
                </div>
                <div className="bg-[var(--color-card-bg)] text-sm p-3 rounded-lg font-medium text-center">
                  We're handling this in the background. You'll only hear from us if something changes.
                </div>
              </div>
            )}

            {coverageState === 'changed' && (
              <div className="slide-up">
                <div className="bg-[#FEE2E2] border border-[var(--color-red)] rounded-lg p-4 mb-4">
                  <h4 className="font-bold flex items-center gap-2 text-[var(--color-red)] mb-2">
                    <AlertOctagon size={18} /> Your coverage has changed
                  </h4>
                  <div className="text-sm space-y-2">
                    <p>We detected a change in your Aetna plan effective August 1.</p>
                    <p>Your MSK benefit is <strong>no longer included</strong> in your employer's 2026-2027 plan.</p>
                  </div>
                </div>
                
                <h4 className="font-bold mb-3">Next Steps</h4>
                <ol className="list-decimal pl-5 text-sm space-y-2 mb-6">
                  <li><strong>Pause your program</strong> — no sessions will be billed starting August 1</li>
                  <li><strong>Contact your HR team</strong> — reference: Hinge Health MSK benefit, Aetna plan</li>
                  <li>Or check if you qualify for self-pay at a reduced rate</li>
                </ol>

                <div className="space-y-3">
                  <button className="btn-primary w-full" onClick={() => setShowModal(true)}>
                    Contact My HR Team
                  </button>
                  <button className="btn-ghost w-full">
                    Talk to Hinge Support
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {coverageState === 'changed' && (
             <div className="bg-[var(--color-teal-light)] text-[var(--color-teal)] p-4 rounded-lg text-xs mb-4 flex items-start gap-3">
                <Info size={24} className="shrink-0" />
                <div>
                  <strong>Why this matters to your employer:</strong><br/>
                  Members who receive unexpected bills escalate to HR and benefits teams directly. Proactive alerts protect your employer relationship as much as your member experience.
                </div>
             </div>
          )}

          <div className="impact-label proposed mb-6">
            <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
            <div>
              <strong>Proposed</strong> — Monthly re-verification. Plain-language alerts. No surprise bills. B2B trust protected.
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content fade-in text-left">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="font-bold text-lg">Email HR Team</h3>
              <button onClick={() => setShowModal(false)} className="text-meta hover:text-charcoal"><X size={20}/></button>
            </div>
            <div className="bg-[var(--color-card-bg)] p-4 rounded-lg text-sm mb-6 border border-[var(--color-border)]">
              "Hi [HR Name], I'm using the Hinge Health MSK program through our Aetna benefits. I received a notification that my MSK benefit may not be included in the upcoming plan year. Could you help clarify if Hinge Health will be covered under the 2026-2027 plan? Thank you."
            </div>
            <div className="flex gap-3">
              <button className="btn-primary flex-1" onClick={() => setShowModal(false)}>Copy Email</button>
              <button className="btn-secondary flex-1" onClick={() => setShowModal(false)}>Open in Mail</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Star = ({ className, fill = "none", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
