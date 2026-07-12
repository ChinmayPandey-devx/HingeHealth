import React, { useState } from 'react';
import { Users, AlertTriangle, TrendingDown, DollarSign, Download, ChevronRight, X, UserPlus, Info } from 'lucide-react';

export default function Module3({ isAfter }) {
  const [subTab, setSubTab] = useState('hr'); // hr, cfo
  const [actionPanelOpen, setActionPanelOpen] = useState(false);

  return (
    <div className="module-content fade-in p-6 text-left">
      {!isAfter && (
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-2xl mb-1 font-bold">Enrollment Dashboard</h2>
          <div className="text-sm text-meta mb-8">Meridian Technologies — 2,400 employees</div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="card-solid text-center">
              <div className="text-3xl font-bold mb-1">847</div>
              <div className="text-xs text-meta uppercase tracking-wider">Enrolled Members</div>
            </div>
            <div className="card-solid text-center">
              <div className="text-3xl font-bold mb-1">612</div>
              <div className="text-xs text-meta uppercase tracking-wider">Active This Month</div>
            </div>
            <div className="card-solid text-center">
              <div className="text-3xl font-bold mb-1">68%</div>
              <div className="text-xs text-meta uppercase tracking-wider">Completion Rate</div>
            </div>
            <div className="card-solid text-center">
              <div className="text-3xl font-bold mb-1">4.2/5</div>
              <div className="text-xs text-meta uppercase tracking-wider">Avg Satisfaction</div>
            </div>
          </div>

          <div className="card p-0 overflow-hidden mb-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--color-card-bg)] text-meta">
                <tr>
                  <th className="p-4 font-semibold">Department</th>
                  <th className="p-4 font-semibold">Enrolled</th>
                  <th className="p-4 font-semibold">Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr><td className="p-4 font-medium">Engineering</td><td className="p-4">247</td><td className="p-4">189</td></tr>
                <tr><td className="p-4 font-medium">Customer Support</td><td className="p-4">189</td><td className="p-4">145</td></tr>
                <tr><td className="p-4 font-medium">Sales (Field)</td><td className="p-4">156</td><td className="p-4">112</td></tr>
                <tr><td className="p-4 font-medium">Operations</td><td className="p-4">203</td><td className="p-4">130</td></tr>
              </tbody>
            </table>
          </div>

          <div className="text-center text-meta text-sm italic mb-6">
            Renewal decision due: September 1, 2026
          </div>

          <div className="impact-label current max-w-xl mx-auto">
            <AlertTriangle size={20} className="shrink-0" />
            <div>
              <strong>Current</strong> — Enrollment numbers only. No early warning. HR references Hinge once a year at renewal.
            </div>
          </div>
        </div>
      )}

      {isAfter && (
        <div className="fade-in max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-3xl mb-1 font-bold">Workforce MSK Risk Index — Q3 2026</h2>
              <div className="text-sm text-meta">Meridian Technologies | 2,400 employees | Powered by Hinge Health</div>
            </div>
            
            {/* Sub-tabs for Module 3 */}
            <div className="flex bg-[var(--color-card-bg)] p-1 rounded-lg">
              <button 
                onClick={() => setSubTab('hr')}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${subTab === 'hr' ? 'bg-white shadow-sm text-[var(--color-charcoal)]' : 'text-meta'}`}
              >
                🏢 HR Dashboard
              </button>
              <button 
                onClick={() => setSubTab('cfo')}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${subTab === 'cfo' ? 'bg-white shadow-sm text-[var(--color-charcoal)]' : 'text-meta'}`}
              >
                💼 CFO Summary
              </button>
            </div>
          </div>

          {subTab === 'hr' && (
            <div className="fade-in">
              {/* KPIs */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="card border-l-4 border-l-[var(--color-border)]">
                  <div className="flex items-center gap-2 text-meta text-sm font-bold mb-2 uppercase tracking-wide">
                    <Users size={16} /> Members Enrolled
                  </div>
                  <div className="text-3xl font-bold">847</div>
                </div>
                <div className="card border-l-4 border-l-[var(--color-amber)]">
                  <div className="flex items-center gap-2 text-[var(--color-amber)] text-sm font-bold mb-2 uppercase tracking-wide">
                    <AlertTriangle size={16} /> Early Risk Signals
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-amber)]">127</div>
                </div>
                <div className="card border-l-4 border-l-[var(--color-teal)]">
                  <div className="flex items-center gap-2 text-[var(--color-teal)] text-sm font-bold mb-2 uppercase tracking-wide">
                    <TrendingDown size={16} /> Claims Prevented (est)
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-teal)]">23</div>
                </div>
                <div className="card border-l-4 border-l-[var(--color-teal)]">
                  <div className="flex items-center gap-2 text-[var(--color-teal)] text-sm font-bold mb-2 uppercase tracking-wide">
                    <DollarSign size={16} /> Projected Savings
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-teal)]">$284k</div>
                </div>
              </div>

              {/* Department Risk Heatmap */}
              <div className="card mb-8">
                <h3 className="text-xl font-bold mb-6">MSK Risk by Department</h3>
                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-1/4">
                      <div className="font-bold flex items-center gap-2">Engineering (Software) <span className="w-2 h-2 rounded-full bg-[var(--color-red)]"></span></div>
                      <div className="text-xs text-[var(--color-red)] font-bold mt-1">🔴 High Risk</div>
                    </div>
                    <div className="w-1/2">
                      <div className="h-4 bg-[var(--color-card-bg)] rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-[var(--color-red)] rounded-full transition-all duration-1000 ease-out" style={{ width: '68%' }}></div>
                      </div>
                      <div className="text-xs space-y-1">
                        <p><strong>34%</strong> of 247 members showing early movement degradation signals</p>
                        <p className="text-meta"><strong>Dominant pattern:</strong> Prolonged seated posture, reduced hip mobility</p>
                        <p className="text-meta"><strong>Avg time to claim:</strong> 4.2 months</p>
                      </div>
                    </div>
                    <div className="w-1/4 flex flex-col justify-center items-end">
                      <div className="text-sm mb-2 font-medium">84 members flagged</div>
                      <button className="btn-primary py-2 px-4 text-sm w-auto whitespace-nowrap" onClick={() => setActionPanelOpen(true)}>Intervene Now</button>
                    </div>
                  </div>
                  <hr className="border-[var(--color-border)]"/>
                  {/* Row 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-1/4">
                      <div className="font-bold flex items-center gap-2">Customer Support <span className="w-2 h-2 rounded-full bg-[var(--color-amber)]"></span></div>
                      <div className="text-xs text-[var(--color-amber)] font-bold mt-1">🟡 Medium Risk</div>
                    </div>
                    <div className="w-1/2">
                      <div className="h-4 bg-[var(--color-card-bg)] rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-[var(--color-amber)] rounded-full transition-all duration-1000 ease-out delay-100" style={{ width: '44%' }}></div>
                      </div>
                      <div className="text-xs space-y-1">
                        <p><strong>21%</strong> of 189 members showing early signals</p>
                        <p className="text-meta"><strong>Dominant pattern:</strong> Repetitive upper limb strain, neck flexion</p>
                      </div>
                    </div>
                    <div className="w-1/4 flex flex-col justify-center items-end">
                      <div className="text-sm mb-2 font-medium">40 members flagged</div>
                      <button className="btn-secondary py-2 px-4 text-sm w-auto whitespace-nowrap">Schedule Outreach</button>
                    </div>
                  </div>
                  <hr className="border-[var(--color-border)]"/>
                  {/* Row 3 & 4 Compressed */}
                  <div className="flex items-start gap-4">
                     <div className="w-1/4">
                      <div className="font-bold flex items-center gap-2">Operations <span className="w-2 h-2 rounded-full bg-[var(--color-teal)]"></span></div>
                      <div className="text-xs text-[var(--color-teal)] font-bold mt-1">🟢 Low Risk</div>
                    </div>
                    <div className="w-1/2">
                      <div className="h-4 bg-[var(--color-card-bg)] rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-[var(--color-teal)] rounded-full transition-all duration-1000 ease-out delay-300" style={{ width: '19%' }}></div>
                      </div>
                      <p className="text-xs"><strong>9%</strong> of 203 members flagged</p>
                    </div>
                    <div className="w-1/4 flex justify-end">
                      <button className="btn-grey">Monitor</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trend Chart */}
              <div className="card mb-8">
                <h3 className="text-xl font-bold mb-2">Company-wide MSK Risk Trend — Q1 to Q3 2026</h3>
                <div className="text-sm text-meta mb-4">Claims declining even as risk signals rise — early intervention is working</div>
                <div className="line-chart">
                  <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="1000" y2="50" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="0" y1="100" x2="1000" y2="100" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5,5" />
                    <line x1="0" y1="150" x2="1000" y2="150" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5,5" />
                    
                    {/* Early Risk Signals (Red) - going up */}
                    <polyline points="0,150 500,120 1000,80" fill="none" stroke="var(--color-red)" strokeWidth="3" style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animation: 'drawLine 1.5s ease-out forwards' }} />
                    <circle cx="0" cy="150" r="4" fill="var(--color-red)" />
                    <circle cx="500" cy="120" r="4" fill="var(--color-red)" />
                    <circle cx="1000" cy="80" r="4" fill="var(--color-red)" />
                    
                    {/* Active Members (Teal) - going up */}
                    <polyline points="0,100 500,80 1000,30" fill="none" stroke="var(--color-teal)" strokeWidth="3" style={{ strokeDasharray: 2000, strokeDashoffset: 2000, animation: 'drawLine 1.5s ease-out forwards 0.2s' }} />
                    <circle cx="0" cy="100" r="4" fill="var(--color-teal)" />
                    <circle cx="500" cy="80" r="4" fill="var(--color-teal)" />
                    <circle cx="1000" cy="30" r="4" fill="var(--color-teal)" />
                    
                    {/* Claims Filed (Grey dotted) - going down */}
                    <polyline points="0,170 500,180 1000,190" fill="none" stroke="var(--color-grey)" strokeWidth="3" strokeDasharray="8,8" style={{ strokeDashoffset: 2000, animation: 'drawLine 1.5s ease-out forwards 0.4s' }} />
                    <circle cx="0" cy="170" r="4" fill="var(--color-grey)" />
                    <circle cx="500" cy="180" r="4" fill="var(--color-grey)" />
                    <circle cx="1000" cy="190" r="4" fill="var(--color-grey)" />
                  </svg>
                  <div className="flex justify-between text-xs text-meta mt-2 absolute w-full -bottom-6">
                    <span>Q1 2026</span>
                    <span>Q2 2026</span>
                    <span>Q3 2026</span>
                  </div>
                </div>
                
                <div className="flex gap-6 justify-center mt-12 mb-4 text-xs font-bold">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[var(--color-teal)] rounded-sm"></div> Active Hinge Members</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[var(--color-red)] rounded-sm"></div> Early Risk Signals</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 border-2 border-[var(--color-grey)] border-dashed rounded-sm"></div> Claims Filed</div>
                </div>
              </div>

              <div className="impact-label proposed mx-auto">
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                <div>
                  <strong>Proposed</strong> — Hinge becomes a proactive workforce intelligence platform. HR references it quarterly, not annually.
                </div>
              </div>
            </div>
          )}

          {subTab === 'cfo' && (
            <div className="fade-in max-w-3xl mx-auto">
              <div className="text-center mb-8 border-b pb-6">
                <h2 className="text-3xl font-bold mb-2">Hinge Health — CFO Quarterly Brief</h2>
                <div className="text-meta">Meridian Technologies | Q3 2026 | Confidential</div>
              </div>

              <div className="bg-gradient-to-r from-[var(--color-teal-light)] to-white border border-[var(--color-teal)] rounded-xl p-6 mb-8 shadow-sm">
                <h3 className="font-bold flex items-center gap-2 text-lg mb-2 text-[var(--color-teal)]"><DollarSign /> Executive Summary</h3>
                <p className="text-sm font-medium leading-relaxed">
                  Key finding: Early MSK intervention is generating measurable ROI. Claims are declining while risk signals are rising — evidence that Hinge is intercepting conditions before they become costs.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="card text-center flex flex-col items-center justify-center p-6 border-t-4 border-t-[var(--color-teal)]">
                  <div className="text-4xl mb-2">💰</div>
                  <div className="text-3xl font-bold text-[var(--color-teal)] mb-1">23</div>
                  <div className="text-xs font-bold uppercase text-meta mb-2">Est. Claims Prevented</div>
                  <div className="text-sm bg-[var(--color-teal-light)] text-[var(--color-teal)] px-3 py-1 rounded-full font-bold">Value: $285,200</div>
                </div>
                <div className="card text-center flex flex-col items-center justify-center p-6 border-t-4 border-t-[var(--color-teal)]">
                  <div className="text-4xl mb-2">📉</div>
                  <div className="text-3xl font-bold mb-1">-26%</div>
                  <div className="text-xs font-bold uppercase text-meta mb-2">Claims Trend YoY</div>
                  <div className="text-sm text-meta">since Hinge enrollment</div>
                </div>
                <div className="card text-center flex flex-col items-center justify-center p-6 border-t-4 border-t-[var(--color-teal)]">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="text-3xl font-bold mb-1">$3.38</div>
                  <div className="text-xs font-bold uppercase text-meta mb-2">Program ROI (Est.)</div>
                  <div className="text-sm text-meta">returned per $1 spent</div>
                </div>
              </div>

              <div className="card border border-[var(--color-amber)] mb-8 overflow-hidden">
                <div className="bg-[#FEF3C7] p-4 text-[var(--color-amber)] font-bold flex items-center gap-2">
                  <Info size={20} /> The case for early intervention at Meridian
                </div>
                <table className="w-full text-sm text-left">
                  <thead className="bg-[var(--color-card-bg)]">
                    <tr>
                      <th className="p-4 border-b">Metric</th>
                      <th className="p-4 border-b">Without Early Intervention</th>
                      <th className="p-4 border-b text-[var(--color-teal)]">With Hinge Early Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-[var(--color-teal-light)] transition-colors"><td className="p-4 font-medium">Projected Q4 claims</td><td className="p-4">34</td><td className="p-4 font-bold text-[var(--color-teal)]">11</td></tr>
                    <tr className="hover:bg-[var(--color-teal-light)] transition-colors"><td className="p-4 font-medium">Avg claim cost</td><td className="p-4">$12,400</td><td className="p-4">$12,400</td></tr>
                    <tr className="hover:bg-[var(--color-teal-light)] transition-colors"><td className="p-4 font-medium">Total projected cost</td><td className="p-4 text-[var(--color-red)]">$421,600</td><td className="p-4">$136,400</td></tr>
                    <tr className="hover:bg-[var(--color-teal-light)] transition-colors"><td className="p-4 font-medium">Hinge program cost</td><td className="p-4">—</td><td className="p-4">$84,000</td></tr>
                    <tr className="bg-[var(--color-card-bg)]"><td className="p-4 font-bold text-lg">Net savings</td><td className="p-4 text-lg">—</td><td className="p-4 font-bold text-[var(--color-teal)] text-lg">$201,200</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="card border-l-4 border-l-[var(--color-teal)]">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-3"><AlertTriangle size={20} className="text-[var(--color-teal)]"/> Renewal Recommendation — September 1, 2026</h3>
                <p className="text-sm mb-4">Based on Q3 data, expanding Hinge Health enrollment from 847 to 1,200 employees is projected to prevent an additional 14-18 claims annually.</p>
                <div className="bg-[var(--color-teal-light)] text-[var(--color-teal)] font-bold p-3 rounded-lg text-sm mb-6 inline-block">
                  Estimated additional savings: $173,600 — $223,200
                </div>
                <div className="flex gap-4">
                  <button className="btn-primary flex-1"><Download size={18}/> Download Full Report</button>
                  <button className="btn-ghost flex-1 border border-[var(--color-border)]">Schedule Renewal Review</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Action Panel Bottom Sheet (HR Tab) */}
      {actionPanelOpen && isAfter && subTab === 'hr' && (
        <>
          <div className="bottom-sheet-overlay" onClick={() => setActionPanelOpen(false)}></div>
          <div className="bottom-sheet slide-up max-w-lg mx-auto left-0 right-0 p-6 fixed">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl">Engineering Department — 84 Members at Risk</h3>
              <button onClick={() => setActionPanelOpen(false)} className="text-meta hover:text-charcoal"><X size={24}/></button>
            </div>
            
            <div className="space-y-4">
              <div className="card border border-[var(--color-border)] hover:border-[var(--color-teal)] cursor-pointer">
                <h4 className="font-bold mb-2">Option 1 — Enroll in Prevention Program</h4>
                <div className="text-sm text-meta space-y-1 mb-4">
                  <p>Send 84 flagged members a personalized nudge to start a prevention exercise program.</p>
                  <p>• Estimated uptake: 40-55 members</p>
                  <p>• Estimated claims prevented: 8-12</p>
                </div>
                <button className="btn-primary w-full" onClick={() => setActionPanelOpen(false)}>Send Nudge</button>
              </div>

              <div className="card border border-[var(--color-border)] hover:border-[var(--color-teal)] cursor-pointer">
                <h4 className="font-bold mb-2">Option 2 — Ergonomics Workshop</h4>
                <div className="text-sm text-meta space-y-1 mb-4">
                  <p>Schedule a 30-minute virtual ergonomics session for the Engineering team.</p>
                  <p>• Hinge PTs available: Next Thursday, July 18</p>
                </div>
                <button className="btn-primary w-full" onClick={() => setActionPanelOpen(false)}>Schedule Session</button>
              </div>
              
              <div className="card border border-[var(--color-border)] hover:border-[var(--color-teal)] cursor-pointer">
                <h4 className="font-bold mb-2">Option 3 — Manager Alert</h4>
                <div className="text-sm text-meta space-y-1 mb-4">
                  <p>Send Engineering managers a de-identified team risk summary.</p>
                  <p>• Includes: Top risk patterns and simple desk ergonomics guide</p>
                </div>
                <button className="btn-primary w-full" onClick={() => setActionPanelOpen(false)}>Send to Managers</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
