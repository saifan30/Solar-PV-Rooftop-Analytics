export interface MonthlyPerformance {
  Month: string;
  MonthNo: number;
  GlobalHorizontalIrradiation: number; // kWh/m²
  DiffuseIrradiation: number; // kWh/m²
  AmbientTemperature: number; // °C
  GlobalIncidentIrradiation: number; // kWh/m²
  GlobalEffectiveIrradiation: number; // kWh/m²
  PVArrayEnergy: number; // kWh (EArray)
  UserEnergy: number; // kWh (E_User)
  SolarEnergy: number; // kWh (E_Solar)
  GridEnergy: number; // kWh (E_Grid)
  EnergyFromGrid: number; // kWh (EFrGrid)
}

export interface BOQItem {
  SNo: number;
  CategoryCode: string;
  Category: string;
  ItemDescription: string;
  Specification: string;
  Quantity: number;
  Unit: string;
  UnitCost: number; // INR
  TotalCost: number; // INR
  Source: string;
}

export interface ComponentSpec {
  Component: string;
  Category: string;
  Manufacturer: string;
  Model: string;
  Quantity: number;
  UnitPower: string;
  TotalPower: string;
  Specification: string;
}

export interface SystemLoss {
  Category: string;
  Description: string;
  Percentage: number;
  EnergyValueKWh?: number;
}

export interface Financial25Year {
  Year: number;
  ElectricitySale: number;
  OwnFunds: number;
  RunCosts: number;
  Depreciation: number;
  TaxableIncome: number;
  Taxes: number;
  AfterTaxProfit: number;
  SelfConsumptionSaving: number;
  CumulativeProfit: number;
  AmortizationPercentage: number;
}

export interface ValidationItem {
  Metric: string;
  Source: string;
  SourceValue: string | number;
  PbiValue: string | number;
  Status: 'MATCH' | 'DERIVED' | 'EXPLAINED';
  Note?: string;
}

export interface DaxMeasure {
  id: string;
  name: string;
  category: 'Energy' | 'Cost' | 'Financial' | 'Environmental';
  code: string;
  explanation: string;
  sourceColumns: string[];
}

export interface FilterState {
  selectedMonth: string; // 'All' or month name
  selectedCategory: string; // 'All' or BOQ category
  energyType: 'All' | 'Solar' | 'Grid';
  yearRange: [number, number]; // [0, 25]
  searchTerm: string;
}
