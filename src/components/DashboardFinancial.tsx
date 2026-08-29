import React from 'react';
import {
  DollarSign,
  TrendingUp,
  Percent,
  Clock,
  PiggyBank,
  PieChart as PieIcon,
  Award,
  CreditCard,
  Building2,
  Receipt,
  Scale
} from 'lucide-react';
import {
  ResponsiveContainer,
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
  ComposedChart
} from 'recharts';
import { KpiCard } from './KpiCard';
import { PROJECT_SUMMARY, BOQ_ITEMS, FINANCIAL_25_YEAR } from '../data/solarData';
import { FilterState } from '../types';

interface DashboardFinancialProps {
  filters: FilterState;
}

export const DashboardFinancial: React.FC<DashboardFinancialProps> = ({ filters }) => {
  // Filter BOQ Items based on selected category filter
  const filteredBOQ = filters.selectedCategory === 'All'
    ? BOQ_ITEMS
    : BOQ_ITEMS.filter(item => item.Category === filters.selectedCategory);

  // BOQ Cost by Category aggregation
  const boqCategoryData = [
    { name: 'A. PV Modules & Support', cost: 140000, color: '#1E3A8A' },
    { name: 'B. Inverter & Power', cost: 45000, color: '#0284C7' },
    { name: 'C. Cabling & Protection', cost: 45000, color: '#10B981' },
    { name: 'D. Engineering & Install', cost: 35000, color: '#F59E0B' },
    { name: 'E. Insurance & Taxes', cost: 10000, color: '#64748B' }
  ];

  // Capital Financing Mix Data
  const financingData = [
    { name: 'Own Funds (Equity)', value: PROJECT_SUMMARY.ownFunds, color: '#1E3A8A' },
    { name: 'Government Subsidy', value: PROJECT_SUMMARY.subsidy, color: '#10B981' }
  ];

  // Major BOQ Components for Visual 2
  const majorComponentsData = BOQ_ITEMS.map(b => ({
    item: b.ItemDescription,
    cost: b.TotalCost,
    category: b.CategoryCode
  })).sort((a, b) => b.cost - a.cost);

  // Filter 25-Year Financial data based on slider
  const filteredFinancial25 = FINANCIAL_25_YEAR;

  return (
    <div className="space-y-6 pb-12">
      {/* Page Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <DollarSign className="w-4 h-4" />
            <span>Power BI Dashboard 2 • Cost & Capital Financials</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Solar PV Cost & Financial Analysis</h2>
          <p className="text-xs text-slate-400 mt-1">
            Capex ₹2,75,000 • Own Funds ₹2,00,000 • Subsidy ₹75,000 • LCOE ₹4.80/kWh • NPV ₹2,66,413 • IRR 20.71%
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
          <div>
            <div className="text-slate-400 font-medium">Payback Period</div>
            <div className="text-emerald-400 font-bold text-sm">6.5 Years</div>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div>
            <div className="text-slate-400 font-medium">25-Yr ROI</div>
            <div className="text-amber-300 font-bold text-sm">133.20 %</div>
          </div>
        </div>
      </div>

      {/* KPI CARDS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard
          title="Total Capex"
          value={`₹${(PROJECT_SUMMARY.totalInstallationCost / 1000).toFixed(0)}k`}
          subtitle="₹2,75,000 Turnkey"
          icon={DollarSign}
          badge="BOQ Match"
          badgeColor="blue"
          borderAccent
        />
        <KpiCard
          title="Cost / Wp"
          value={`₹${PROJECT_SUMMARY.costPerWp}`}
          subtitle="Per Peak Watt Installed"
          icon={TagIcon}
          badge="Benchmark"
          badgeColor="slate"
        />
        <KpiCard
          title="Own Funds"
          value={`₹${(PROJECT_SUMMARY.ownFunds / 1000).toFixed(0)}k`}
          subtitle="Owner Net Investment"
          icon={PiggyBank}
          badge="72.7% Equity"
          badgeColor="indigo"
        />
        <KpiCard
          title="Subsidy"
          value={`₹${(PROJECT_SUMMARY.subsidy / 1000).toFixed(0)}k`}
          subtitle="Govt Capital Incentive"
          icon={Award}
          badge="27.3% Subsidy"
          badgeColor="emerald"
        />
        <KpiCard
          title="Annual O&M (Y1)"
          value={`₹${Math.round(PROJECT_SUMMARY.totalInstallationCost * 0.1).toLocaleString()}`}
          subtitle="₹27,682 with 5% Inflation"
          icon={Receipt}
          badge="5% Inflation"
          badgeColor="amber"
        />
        <KpiCard
          title="LCOE"
          value={`₹${PROJECT_SUMMARY.lcoe}`}
          unit="/kWh"
          subtitle="Levelized Cost"
          icon={Scale}
          badge="Low Cost"
          badgeColor="emerald"
        />
        <KpiCard
          title="Payback Period"
          value={PROJECT_SUMMARY.paybackPeriod}
          unit="Years"
          subtitle="Breakeven Year 6.5"
          icon={Clock}
          badge="Fast Return"
          badgeColor="emerald"
        />
        <KpiCard
          title="Net Present Value"
          value={`₹${(PROJECT_SUMMARY.npv / 1000).toFixed(0)}k`}
          subtitle="At 8.0% Discount Rate"
          icon={TrendingUp}
          badge="NPV Positive"
          badgeColor="blue"
        />
        <KpiCard
          title="IRR Rate"
          value={`${PROJECT_SUMMARY.irr}%`}
          subtitle="Internal Rate of Return"
          icon={Percent}
          badge="20.71% IRR"
          badgeColor="emerald"
        />
        <KpiCard
          title="ROI Yield"
          value={`${PROJECT_SUMMARY.roi}%`}
          subtitle="Return on Investment"
          icon={Award}
          badge="High ROI"
          badgeColor="emerald"
        />
        <KpiCard
          title="25-Yr Net Profit"
          value={`₹${(PROJECT_SUMMARY.npv / 1000).toFixed(0)}k`}
          subtitle="Cumulative Cash Profit"
          icon={PiggyBank}
          badge="Cash Positive"
          badgeColor="blue"
        />
        <KpiCard
          title="Depreciable Asset"
          value="₹185k"
          subtitle="Modules + Inverter + Rack"
          icon={Building2}
          badge="Straight-Line 20Y"
          badgeColor="slate"
        />
      </div>

      {/* VISUALS GRID - ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual 1: BOQ Cost by Category */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 1: BOQ Cost by Category</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">₹2,75,000 Capex Breakdown across Categories A-E</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={boqCategoryData}
                  cx="50%"
                  cy="45%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="cost"
                >
                  {boqCategoryData.map((entry, index) => (
                    <Cell key={`cat-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(val: any) => [`₹${val.toLocaleString()}`]} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 2: Major Cost Components Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 2: BOQ Line Items Cost Ranking</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Highest Cost Drivers in Project Capex (INR)</p>
            </div>
            <span className="text-[10px] bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-1 rounded font-mono font-semibold">
              Power BI Visual: Bar Chart
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={majorComponentsData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" opacity={0.3} />
                <XAxis type="number" tick={{ fontSize: 10, fill: '#94A3B8' }} formatter={(v: any) => `₹${v/1000}k`} />
                <YAxis dataKey="item" type="category" tick={{ fontSize: 10, fill: '#94A3B8' }} width={140} />
                <Tooltip formatter={(v: any) => [`₹${v.toLocaleString()}`]} />
                <Bar dataKey="cost" name="Total Cost (INR)" fill="#38BDF8" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VISUALS GRID - ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visual 8: Capital Financing Mix */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 8: Financing Mix (Own Funds vs Subsidy)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">₹200k Owner Equity + ₹75k Govt Subsidy</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={financingData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} dataKey="value">
                  {financingData.map((entry, index) => (
                    <Cell key={`fin-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: any) => [`₹${v.toLocaleString()}`]} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 11: Cumulative Cash Flow & Payback Point */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 11: Cumulative Cash Flow & 6.5 Year Payback Breakeven</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">25-Year Cumulative Profit (₹) Crossing Breakeven at Year 6.5</p>
            </div>
            <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-mono font-semibold">
              Breakeven Curve
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredFinancial25} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Year" tick={{ fontSize: 10, fill: '#94A3B8' }} label={{ value: 'Operating Year', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} formatter={(v: any) => `₹${v/1000}k`} />
                <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString()}`]} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="CumulativeProfit" name="Cumulative Profit (INR)" stroke="#10B981" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* VISUALS GRID - ROW 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visual 10: Yearly Net Profit & Cash Flow */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 10: Yearly Net Profit & Savings</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Self-Consumption Tariff Savings + Elec Sales - Running OPEX</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={filteredFinancial25} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Year" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} formatter={(v: any) => `₹${v/1000}k`} />
                <Tooltip formatter={(v: any) => [`₹${Number(v).toLocaleString()}`]} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="SelfConsumptionSaving" name="Self-Consumption Savings (INR)" fill="#10B981" stackId="savings" />
                <Bar dataKey="ElectricitySale" name="Grid Feed-in Sales (INR)" fill="#0284C7" stackId="savings" />
                <Line type="monotone" dataKey="RunCosts" name="Annual Running OPEX (INR)" stroke="#EF4444" strokeWidth={2} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visual 12: 25-Year Financial Amortization Percentage */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Visual 12: Capital Amortization Progress (%)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Percentage of Own Investment Amortized Over 25 Years (Reaches 233.2%)</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredFinancial25} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="Year" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} unit="%" domain={[0, 250]} />
                <Tooltip formatter={(v: any) => [`${v}%`]} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="AmortizationPercentage" name="Amortization %" stroke="#38BDF8" strokeWidth={2.5} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Tag Icon component
function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}
