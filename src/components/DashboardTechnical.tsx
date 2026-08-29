import React from 'react';
import {
  Zap,
  Sun,
  Activity,
  Gauge,
  Leaf,
  CloudSun,
  Flame,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { KpiCard } from './KpiCard';
import { PROJECT_SUMMARY, MONTHLY_PERFORMANCE, SYSTEM_LOSSES } from '../data/solarData';
import { FilterState } from '../types';

interface DashboardTechnicalProps {
  filters: FilterState;
}

export const DashboardTechnical: React.FC<DashboardTechnicalProps> = ({ filters }) => {
  // Filter monthly performance data based on selected month
  const filteredMonthly = filters.selectedMonth === 'All'
    ? MONTHLY_PERFORMANCE
    : MONTHLY_PERFORMANCE.filter(m => m.Month === filters.selectedMonth);

  // Totals & Averages based on filtered selection
  const totalProduced = filteredMonthly.reduce((acc, curr) => acc + curr.PVArrayEnergy, 0);
  const totalUsed = filteredMonthly.reduce((acc, curr) => acc + curr.UserEnergy, 0);
  const totalSolar = filteredMonthly.reduce((acc, curr) => acc + curr.SolarEnergy, 0);
  const totalGridInjected = filteredMonthly.reduce((acc, curr) => acc + curr.GridEnergy, 0);
  const totalEnergyFromGrid = filteredMonthly.reduce((acc, curr) => acc + curr.EnergyFromGrid, 0);

  // Solar vs Grid Donut Data
  const solarGridSplit = [
    { name: 'Direct Solar Consumed', value: Math.round(totalSolar), color: '#10B981' },
    { name: 'Injected to Grid', value: Math.round(totalGridInjected), color: '#0284C7' },
    { name: 'Grid Backup Used', value: Math.round(totalEnergyFromGrid), color: '#64748B' }
  ];

  // P50 P90 P95 Data
  const exceedanceData = [
    { name: 'P50 (Median Yield)', value: PROJECT_SUMMARY.p50Production, fill: '#10B981' },
    { name: 'P90 (90% Probability)', value: PROJECT_SUMMARY.p90Production, fill: '#0284C7' },
    { name: 'P95 (Conservative)', value: PROJECT_SUMMARY.p95Production, fill: '#F59E0B' }
  ];

  // CO2 Emissions Comparison Data
  const co2Data = [
    { category: 'Replaced Grid Emissions', value: PROJECT_SUMMARY.replacedCO2, fill: '#10B981' },
    { category: 'Net CO2 Saved', value: PROJECT_SUMMARY.lifetimeCO2Saved, fill: '#0284C7' },
    { category: 'Lifecycle System Emissions', value: PROJECT_SUMMARY.generatedCO2, fill: '#F59E0B' }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Page Title & Context Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sun className="w-4 h-4" />
            <span>Power BI Dashboard 1 • Engineering & Performance</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Solar PV Technical & Production Analytics</h2>
          <p className="text-xs text-slate-400 mt-1">
            5.50 kWp Grid-Connected Rooftop Array • Longi Solar 550Wp x 10 • Sungrow SG5.0RS Inverter • Location: India
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
          <div className="text-right">
            <div className="text-slate-400 font-medium">Weather Model</div>
            <div className="text-amber-300 font-bold">Meteonorm 8.1 Synthetic</div>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div>
            <div className="text-slate-400 font-medium">Tilt / Azimuth</div>
            <div className="text-white font-bold">18° / 0° (South)</div>
          </div>
        </div>
      </div>

      {/* KPI CARDS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <KpiCard
          title="Installed Capacity"
          value={PROJECT_SUMMARY.installedCapacityDC}
          unit="kWp"
          subtitle="5.0 kWac Inverter Rating"
          icon={Zap}
          badge="DC Rating"
          badgeColor="blue"
          borderAccent
        />
        <KpiCard
          title="PV Modules"
          value={PROJECT_SUMMARY.numModules}
          unit="Units"
          subtitle="10 x 550Wp Longi Solar"
          icon={Sun}
          badge="1 String"
          badgeColor="amber"
        />
        <KpiCard
          title="Annual Yield"
          value={totalProduced.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          unit="kWh/yr"
          subtitle="PV Array Total Output"
          icon={Activity}
          badge="Simulation"
          badgeColor="emerald"
        />
        <KpiCard
          title="User Load Needs"
          value={totalUsed.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          unit="kWh/yr"
          subtitle="21.6 kWh/Day Household"
          icon={CloudSun}
          badge="100% Demand"
          badgeColor="indigo"
        />
        <KpiCard
          title="Specific Yield"
          value={PROJECT_SUMMARY.specificProduction}
          unit="kWh/kWp"
          subtitle="Yield per kWp capacity"
          icon={Gauge}
          badge="High Yield"
          badgeColor="emerald"
        />
        <KpiCard
          title="Performance Ratio"
          value={PROJECT_SUMMARY.performanceRatio}
          unit="%"
          subtitle="PR Loss Adjusted"
          icon={ShieldCheck}
          badge="81.27% Benchmark"
          badgeColor="blue"
        />
        <KpiCard
          title="Solar Fraction"
          value={PROJECT_SUMMARY.solarFraction}
          unit="%"
          subtitle="Self-Sufficiency Ratio"
          icon={Flame}
          badge="63.46% Solar"
          badgeColor="emerald"
        />
        <KpiCard
          title="P50 Production"
          value={PROJECT_SUMMARY.p50Production.toLocaleString()}
          unit="kWh"
          subtitle="Median Production Target"
          icon={BarChart3}
          badge="P50 Standard"
          badgeColor="slate"
        />
        <KpiCard
          title="P90 Production"
          value={PROJECT_SUMMARY.p90Production.toLocaleString()}
          unit="kWh"
          subtitle="90% Exceedance Yield"
          icon={TrendingUp}
          badge="P90 Security"
          badgeColor="blue"
        />
        <KpiCard
          title="Lifetime CO2 Offset"
          value={PROJECT_SUMMARY.lifetimeCO2Saved}
          unit="tCO2"
          subtitle="Clean Renewable Energy"
          icon={Leaf}
          badge="25-Yr Net"
          badgeColor="emerald"
        />
      </div>

      {/* VISUALS GRID - ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual 1: Monthly Energy Production Composite */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 1: Monthly Energy Generation & Demand</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">PV Array Output (EArray) vs Household Consumption (E_User)</p>
            </div>
            <span className="text-[10px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono font-semibold">
              Power BI Visual: Composed Chart
            </span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} unit=" kWh" />
                <Tooltip formatter={(value: any) => [`${value} kWh`]} labelStyle={{ color: '#0F172A', fontWeight: 'bold' }} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="PVArrayEnergy" name="PV Array Production (kWh)" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="UserEnergy" name="User Energy Demand (kWh)" stroke="#38BDF8" strokeWidth={2.5} dot={{ r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 2: Solar Energy vs Grid Energy Split */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 2: Solar vs Grid Dispatch</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Energy Self-Consumption & Grid Flow</p>
            </div>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded font-mono font-semibold">
              Donut Chart
            </span>
          </div>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={solarGridSplit}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {solarGridSplit.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(val: any) => [`${val} kWh`]} />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VISUALS GRID - ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visual 3: Monthly PV Array Energy & Effective Irradiation */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 3: Monthly PV Array Output vs Effective Irradiation</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Correlation between GEff (kWh/m²) & EArray Yield (kWh)</p>
            </div>
            <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-mono font-semibold">
              Dual Axis Chart
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="arrayColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#94A3B8' }} unit=" kWh" />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#94A3B8' }} unit=" kWh/m²" />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Area yAxisId="left" type="monotone" dataKey="PVArrayEnergy" name="Array Output (kWh)" stroke="#10B981" fillOpacity={1} fill="url(#arrayColor)" />
                <Line yAxisId="right" type="monotone" dataKey="GlobalEffectiveIrradiation" name="Effective Irradiation (kWh/m²)" stroke="#F59E0B" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 4: Monthly User Energy Source Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 4: Energy Supplied to User Breakdown</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Direct Solar Consumption vs Grid Backup Coverage</p>
            </div>
            <span className="text-[10px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono font-semibold">
              Stacked Column Chart
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} unit=" kWh" />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="SolarEnergy" name="Solar Self-Consumed (kWh)" stackId="a" fill="#10B981" />
                <Bar dataKey="EnergyFromGrid" name="Energy From Grid (kWh)" stackId="a" fill="#0284C7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VISUALS GRID - ROW 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual 5: Monthly Injected Energy */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 5: Grid Energy Injected</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Surplus solar exported to grid (E_Grid)</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} unit=" kWh" />
                <Tooltip />
                <Bar dataKey="GridEnergy" name="Injected to Grid (kWh)" fill="#0284C7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 6: Irradiation Comparison */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 6: Solar Irradiation Profiles</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">GlobHor, DiffHor, GlobInc & GEff (kWh/m²)</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Line type="monotone" dataKey="GlobalHorizontalIrradiation" name="Horizontal (GlobHor)" stroke="#F59E0B" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="GlobalIncidentIrradiation" name="Incident (GlobInc)" stroke="#10B981" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="DiffuseIrradiation" name="Diffuse (DiffHor)" stroke="#94A3B8" dot={false} strokeWidth={1.5} strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 7: Ambient Temperature */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 7: Ambient Temperature Profile</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Monthly Mean Ambient Temp (°C)</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Month" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <YAxis domain={[15, 35]} tick={{ fontSize: 10, fill: '#94A3B8' }} unit="°C" />
                <Tooltip />
                <Line type="monotone" dataKey="AmbientTemperature" name="Ambient Temp (°C)" stroke="#EF4444" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VISUALS GRID - ROW 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual 8: System Loss Diagram */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 8: System Loss Diagram Breakdown</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Optical, Thermal, Quality, Wiring & Inverter Efficiency Losses (%)</p>
            </div>
            <span className="text-[10px] bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2 py-1 rounded font-mono font-semibold">
              Loss Factor Analysis
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SYSTEM_LOSSES} layout="vertical" margin={{ top: 5, right: 20, left: 100, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" opacity={0.3} />
                <XAxis type="number" tick={{ fontSize: 10, fill: '#94A3B8' }} unit="%" domain={[-8, 2]} />
                <YAxis dataKey="Description" type="category" tick={{ fontSize: 10, fill: '#94A3B8' }} width={170} />
                <Tooltip formatter={(val: any) => [`${val}%`]} />
                <Bar dataKey="Percentage" name="Loss Factor (%)" radius={[0, 4, 4, 0]}>
                  {SYSTEM_LOSSES.map((entry, index) => (
                    <Cell key={`loss-${index}`} fill={entry.Percentage > 0 ? '#10B981' : '#EF4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 9 & 10 Column */}
        <div className="space-y-6">
          {/* Visual 9: P50 vs P90 vs P95 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Visual 9: P50 vs P90 Yield Risk Analysis</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Exceedance Probability Annual Production (kWh)</p>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={exceedanceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#94A3B8' }} />
                  <YAxis domain={[8000, 8800]} tick={{ fontSize: 9, fill: '#94A3B8' }} />
                  <Tooltip formatter={(v: any) => [`${v} kWh`]} />
                  <Bar dataKey="value" name="Annual Yield (kWh)" radius={[4, 4, 0, 0]}>
                    {exceedanceData.map((e, idx) => (
                      <Cell key={`ex-${idx}`} fill={e.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Visual 10: CO2 Balance */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Visual 10: Environmental & CO2 Impact</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">25-Year Lifetime Emissions Offset (tCO2)</p>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={co2Data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="category" tick={{ fontSize: 9, fill: '#94A3B8' }} />
                  <YAxis tick={{ fontSize: 9, fill: '#94A3B8' }} />
                  <Tooltip formatter={(v: any) => [`${v} tCO2`]} />
                  <Bar dataKey="value" name="CO2 Metric (tCO2)" radius={[4, 4, 0, 0]}>
                    {co2Data.map((e, idx) => (
                      <Cell key={`co2-${idx}`} fill={e.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
