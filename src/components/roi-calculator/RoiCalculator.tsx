// @ts-nocheck

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';



const FIXED_PROSPECTS: Record<number, number> = {
  4000: 1000,
  5000: 1250,
  6000: 1700,
  7000: 2220,
  8000: 3000,
  9000: 3600,
  10000: 4300,
  12000: 5150
};
interface CycleMetrics {
  leads: number;
  proposals: number;
  closedDeals: number;
}

interface BudgetTier {
  cycle1?: CycleMetrics;
  cycle2?: CycleMetrics;
  cycle3?: CycleMetrics;
  cycle4to12?: CycleMetrics;
  cycle3to10?: CycleMetrics;
  cycle12?: CycleMetrics;
  cycle2to5?: CycleMetrics;
  cycle6?: CycleMetrics;
  cycle8to12?: CycleMetrics;
  cycle2to3?: CycleMetrics;
  cycle4to5?: CycleMetrics;
  cycle7to12?: CycleMetrics;
  cycle4to10?: CycleMetrics;
  cycle1to3?: CycleMetrics;
  cycle6to12?: CycleMetrics;
  cycle4to6?: CycleMetrics;
  cycle3to4?: CycleMetrics;
  cycle5to10?: CycleMetrics;
  cycle3to6?: CycleMetrics;
  cycle3to5?: CycleMetrics;
  cycle5to6?: CycleMetrics;
  cycle5to7?: CycleMetrics;
  cycle5to8?: CycleMetrics;
  cycle5to9?: CycleMetrics;
  cycle5to11?: CycleMetrics;
  cycle5to12?: CycleMetrics;
  cycle5to13?: CycleMetrics;
  cycle5to14?: CycleMetrics;
  cycle5to15?: CycleMetrics;
  cycle5to16?: CycleMetrics;
  cycle5to17?: CycleMetrics;
}

interface BudgetMetrics {
  tier1: BudgetTier;
  tier2: BudgetTier;
  tier3: BudgetTier;
  tier4: BudgetTier;
  tier5: BudgetTier;
  tier6: BudgetTier;
  tier7: BudgetTier;
}

// Metrics data specifically for $4000 budget
const BUDGET_4K_METRICS: BudgetMetrics = {
  tier1: {
    cycle1: { leads: 40, proposals: 12, closedDeals: 4 },
    cycle2: { leads: 32, proposals: 11, closedDeals: 4 },
    cycle3: { leads: 32, proposals: 11, closedDeals: 3 },
    cycle4to12: { leads: 30, proposals: 9, closedDeals: 2 }
  },
  tier2: {
    cycle1: { leads: 40, proposals: 12, closedDeals: 3 },
    cycle2: { leads: 35, proposals: 11, closedDeals: 3 },
    cycle3to10: { leads: 30, proposals: 9, closedDeals: 2 },
    cycle12: { leads: 35, proposals: 8, closedDeals: 1 }
  },
  tier3: {
    cycle1: { leads: 35, proposals: 11, closedDeals: 3 },
    cycle2to5: { leads: 30, proposals: 9, closedDeals: 2 },
    cycle6: { leads: 30, proposals: 19, closedDeals: 1 },
    cycle8to12: { leads: 25, proposals: 8, closedDeals: 1 }
  },
  tier4: {
    cycle1: { leads: 30, proposals: 9, closedDeals: 2 },
    cycle2to3: { leads: 30, proposals: 9, closedDeals: 1 },
    cycle4to5: { leads: 30, proposals: 9, closedDeals: 0.9 },
    cycle7to12: { leads: 25, proposals: 9, closedDeals: 0.7 }
  },
  tier5: {
    cycle1: { leads: 30, proposals: 9, closedDeals: 1 },
    cycle2to3: { leads: 30, proposals: 9, closedDeals: 0.9 },
    cycle4to6: { leads: 25, proposals: 8, closedDeals: 0.4 },
    cycle7to12: { leads: 20, proposals: 6, closedDeals: 0.3 }
  },
  tier6: {
    cycle1: { leads: 25, proposals: 8, closedDeals: 0.7 },
    cycle2to3: { leads: 25, proposals: 8, closedDeals: 0.4 },
    cycle4to10: { leads: 20, proposals: 6, closedDeals: 0.3 },
    cycle12: { leads: 15, proposals: 5, closedDeals: 0.2 }
  },
  tier7: {
    cycle1to3: { leads: 20, proposals: 6, closedDeals: 0.3 },
    cycle4to5: { leads: 20, proposals: 6, closedDeals: 0.2 },
    cycle6to12: { leads: 15, proposals: 5, closedDeals: 0.2 }
  }
};

const BUDGET_5K_METRICS: BudgetMetrics = {
  tier1: {
    cycle1: { leads: 50, proposals: 15, closedDeals: 5 },
    cycle2: { leads: 44, proposals: 13, closedDeals: 5 },
    cycle3: { leads: 44, proposals: 13, closedDeals: 4 },
    cycle4to6: { leads: 38, proposals: 11, closedDeals: 3 },
    cycle8to12: { leads: 38, proposals: 11, closedDeals: 2 }
  },
  tier2: {
    cycle1: { leads: 50, proposals: 15, closedDeals: 4 },
    cycle2: { leads: 44, proposals: 13, closedDeals: 4 },
    cycle3to4: { leads: 38, proposals: 11, closedDeals: 3 },
    cycle5to10: { leads: 38, proposals: 11, closedDeals: 2 },
    cycle12: { leads: 31, proposals: 9, closedDeals: 2 }
  },
  tier3: {
    cycle1: { leads: 44, proposals: 13, closedDeals: 3 },
    cycle2: { leads: 38, proposals: 11, closedDeals: 3 },
    cycle3to6: { leads: 38, proposals: 11, closedDeals: 2 },
    cycle8to12: { leads: 31, proposals: 9, closedDeals: 1 }
  },
  tier4: {
    cycle1: { leads: 38, proposals: 11, closedDeals: 2 },
    cycle2to3: { leads: 38, proposals: 11, closedDeals: 2 },
    cycle4to5: { leads: 38, proposals: 11, closedDeals: 1 },
    cycle6to12: { leads: 31, proposals: 9, closedDeals: 0.9 }
  },
  tier5: {
    cycle1: { leads: 38, proposals: 11, closedDeals: 2 },
    cycle2to3: { leads: 38, proposals: 11, closedDeals: 1 },
    cycle4to6: { leads: 31, proposals: 9, closedDeals: 0.5 },
    cycle8to12: { leads: 25, proposals: 8, closedDeals: 0.4 }
  },
  tier6: {
    cycle1: { leads: 31, proposals: 9, closedDeals: 0.9 },
    cycle2to3: { leads: 31, proposals: 9, closedDeals: 0.5 },
    cycle4to10: { leads: 25, proposals: 8, closedDeals: 0.4 },
    cycle12: { leads: 19, proposals: 6, closedDeals: 0.3 }
  },
  tier7: {
    cycle1to3: { leads: 25, proposals: 8, closedDeals: 0.4 },
    cycle4to5: { leads: 25, proposals: 8, closedDeals: 0.3 },
    cycle6to12: { leads: 19, proposals: 6, closedDeals: 0.2 }
  }
};

// New $6000 budget metrics
const BUDGET_6K_METRICS = {
  tier1: {
    cycle1: { leads: 68, proposals: 20, closedDeals: 7 },
    cycle2: { leads: 60, proposals: 18, closedDeals: 6 },
    cycle3: { leads: 60, proposals: 18, closedDeals: 5 },
    cycle4to6: { leads: 51, proposals: 15, closedDeals: 4 },
    cycle8to12: { leads: 51, proposals: 15, closedDeals: 3 }
  },
  tier2: {
    cycle1: { leads: 68, proposals: 20, closedDeals: 6 },
    cycle2: { leads: 60, proposals: 18, closedDeals: 5 },
    cycle3to4: { leads: 51, proposals: 15, closedDeals: 4 },
    cycle5to10: { leads: 51, proposals: 15, closedDeals: 3 },
    cycle12: { leads: 43, proposals: 13, closedDeals: 2 }
  },
  tier3: {
    cycle1: { leads: 60, proposals: 18, closedDeals: 4 },
    cycle2: { leads: 51, proposals: 15, closedDeals: 4 },
    cycle3to5: { leads: 51, proposals: 15, closedDeals: 3 },
    cycle6: { leads: 51, proposals: 15, closedDeals: 2 },
    cycle8to12: { leads: 43, proposals: 13, closedDeals: 2 }
  },
  tier4: {
    cycle1: { leads: 51, proposals: 15, closedDeals: 3 },
    cycle2to3: { leads: 51, proposals: 15, closedDeals: 2 },
    cycle4to5: { leads: 51, proposals: 15, closedDeals: 1 },
    cycle6to12: { leads: 43, proposals: 13, closedDeals: 1 }
  },
  tier5: {
    cycle1: { leads: 51, proposals: 15, closedDeals: 2 },
    cycle2to3: { leads: 51, proposals: 15, closedDeals: 1 },
    cycle4to6: { leads: 43, proposals: 13, closedDeals: 0.7 },
    cycle8to12: { leads: 34, proposals: 10, closedDeals: 0.6 }
  },
  tier6: {
    cycle1: { leads: 43, proposals: 13, closedDeals: 1 },
    cycle2to3: { leads: 43, proposals: 13, closedDeals: 0.7 },
    cycle4to10: { leads: 34, proposals: 10, closedDeals: 0.5 },
    cycle12: { leads: 26, proposals: 8, closedDeals: 0.4 }
  },
  tier7: {
    cycle1to3: { leads: 34, proposals: 10, closedDeals: 0.6 },
    cycle4to5: { leads: 34, proposals: 10, closedDeals: 0.4 },
    cycle6to12: { leads: 26, proposals: 8, closedDeals: 0.3 }
  }
};

// New $7000 budget metrics
const BUDGET_7K_METRICS = {
  tier1: {
    cycle1: { leads: 89, proposals: 27, closedDeals: 9 },
    cycle2: { leads: 78, proposals: 23, closedDeals: 8 },
    cycle3: { leads: 78, proposals: 23, closedDeals: 7 },
    cycle4to6: { leads: 67, proposals: 20, closedDeals: 5 },
    cycle8to12: { leads: 57, proposals: 20, closedDeals: 4 }
  },
  tier2: {
    cycle1: { leads: 89, proposals: 27, closedDeals: 8 },
    cycle2: { leads: 78, proposals: 23, closedDeals: 7 },
    cycle3to4: { leads: 67, proposals: 20, closedDeals: 5 },
    cycle5to10: { leads: 67, proposals: 20, closedDeals: 4 },
    cycle12: { leads: 56, proposals: 17, closedDeals: 3 }
  },
  tier3: {
    cycle1: { leads: 78, proposals: 23, closedDeals: 6 },
    cycle2: { leads: 67, proposals: 20, closedDeals: 5 },
    cycle3to5: { leads: 67, proposals: 20, closedDeals: 4 },
    cycle6: { leads: 67, proposals: 20, closedDeals: 3 },
    cycle8to12: { leads: 56, proposals: 17, closedDeals: 2 }
  },
  tier4: {
    cycle1: { leads: 67, proposals: 20, closedDeals: 4 },
    cycle2to3: { leads: 67, proposals: 20, closedDeals: 3 },
    cycle4to5: { leads: 67, proposals: 20, closedDeals: 2 },
    cycle6to12: { leads: 56, proposals: 17, closedDeals: 2 }
  },
  tier5: {
    cycle1: { leads: 67, proposals: 20, closedDeals: 3 },
    cycle2to3: { leads: 67, proposals: 20, closedDeals: 2 },
    cycle4to6: { leads: 56, proposals: 17, closedDeals: 1 },
    cycle8to12: { leads: 44, proposals: 13, closedDeals: 0.8 }
  },
  tier6: {
    cycle1: { leads: 56, proposals: 17, closedDeals: 2 },
    cycle2to3: { leads: 56, proposals: 17, closedDeals: 1 },
    cycle4to10: { leads: 44, proposals: 13, closedDeals: 0.6 },
    cycle12: { leads: 33, proposals: 10, closedDeals: 0.5 }
  },
  tier7: { 
    cycle1to3: { leads: 44, proposals: 13, closedDeals: 0.8 },
    cycle4to5: { leads: 44, proposals: 13, closedDeals: 0.5 },
    cycle6to12: { leads: 33, proposals: 10, closedDeals: 0.4 }
  }
};


// Add new $8000 budget metrics constant
const BUDGET_8K_METRICS = {
  tier1: {
    cycle1: { leads: 120, proposals: 36, closedDeals: 13 },
    cycle2: { leads: 105, proposals: 32, closedDeals: 11 },
    cycle3: { leads: 105, proposals: 32, closedDeals: 9 },
    cycle4to6: { leads: 90, proposals: 27, closedDeals: 7 },
    cycle8to12: { leads: 90, proposals: 27, closedDeals: 5 }
  },
  tier2: {
    cycle1: { leads: 120, proposals: 36, closedDeals: 10 },
    cycle2: { leads: 105, proposals: 32, closedDeals: 9 },
    cycle3to4: { leads: 90, proposals: 27, closedDeals: 7 },
    cycle5to10: { leads: 90, proposals: 27, closedDeals: 5 },
    cycle12: { leads: 75, proposals: 23, closedDeals: 4 }
  },
  tier3: {
    cycle1: { leads: 105, proposals: 32, closedDeals: 8 },
    cycle2: { leads: 90, proposals: 27, closedDeals: 7 },
    cycle3to5: { leads: 90, proposals: 27, closedDeals: 5 },
    cycle6: { leads: 90, proposals: 27, closedDeals: 4 },
    cycle8to12: { leads: 75, proposals: 23, closedDeals: 3 }
  },
  tier4: {
    cycle1: { leads: 90, proposals: 27, closedDeals: 5 },
    cycle2to3: { leads: 90, proposals: 27, closedDeals: 4 },
    cycle4to5: { leads: 90, proposals: 27, closedDeals: 3 },
    cycle6to12: { leads: 75, proposals: 23, closedDeals: 2 }
  },
  tier5: {
    cycle1: { leads: 90, proposals: 27, closedDeals: 4 },
    cycle2to3: { leads: 90, proposals: 27, closedDeals: 3 },
    cycle4to6: { leads: 75, proposals: 23, closedDeals: 1 },
    cycle8to12: { leads: 60, proposals: 18, closedDeals: 1 }
  },
  tier6: {
    cycle1: { leads: 75, proposals: 23, closedDeals: 2 },
    cycle2to3: { leads: 75, proposals: 23, closedDeals: 1 },
    cycle4to10: { leads: 60, proposals: 18, closedDeals: 0.9 },
    cycle12: { leads: 45, proposals: 14, closedDeals: 0.7 }
  },
  tier7: {  // New tier for client value 1000000$ - infinite
    cycle1to3: { leads: 60, proposals: 18, closedDeals: 1 },
    cycle4to5: { leads: 60, proposals: 18, closedDeals: 0.7 },
    cycle6to12: { leads: 45, proposals: 14, closedDeals: 0.5 }
  }
};

const BUDGET_9K_METRICS = {
  tier1: {
    cycle1: { leads: 144, proposals: 43, closedDeals: 15 },
    cycle2: { leads: 126, proposals: 38, closedDeals: 13 },
    cycle3: { leads: 126, proposals: 38, closedDeals: 11 },
    cycle4to6: { leads: 108, proposals: 32, closedDeals: 8 },
    cycle8to12: { leads: 108, proposals: 32, closedDeals: 6 }
  },
  tier2: {
    cycle1: { leads: 144, proposals: 43, closedDeals: 13 },
    cycle2: { leads: 126, proposals: 38, closedDeals: 11 },
    cycle3to4: { leads: 108, proposals: 32, closedDeals: 8 },
    cycle5to10: { leads: 108, proposals: 32, closedDeals: 6 },
    cycle12: { leads: 90, proposals: 27, closedDeals: 5 }
  },
  tier3: {
    cycle1: { leads: 126, proposals: 38, closedDeals: 9 },
    cycle2: { leads: 108, proposals: 32, closedDeals: 8 },
    cycle3to5: { leads: 108, proposals: 32, closedDeals: 6 },
    cycle6: { leads: 108, proposals: 32, closedDeals: 5 },
    cycle8to12: { leads: 90, proposals: 27, closedDeals: 4 }
  },
  tier4: {
    cycle1: { leads: 108, proposals: 32, closedDeals: 6 },
    cycle2to3: { leads: 108, proposals: 32, closedDeals: 5 },
    cycle4to5: { leads: 108, proposals: 32, closedDeals: 3 },
    cycle6to12: { leads: 90, proposals: 27, closedDeals: 3 }
  },
  tier5: {
    cycle1: { leads: 108, proposals: 32, closedDeals: 5 },
    cycle2to3: { leads: 108, proposals: 32, closedDeals: 3 },
    cycle4to6: { leads: 90, proposals: 27, closedDeals: 2 },
    cycle8to12: { leads: 72, proposals: 22, closedDeals: 1 }
  },
  tier6: {
    cycle1: { leads: 90, proposals: 27, closedDeals: 3 },
    cycle2to3: { leads: 90, proposals: 27, closedDeals: 2 },
    cycle4to10: { leads: 72, proposals: 22, closedDeals: 1 },
    cycle12: { leads: 54, proposals: 16, closedDeals: 0.8 }
  },
  tier7: {  // New tier for client value 1000000$ - infinite
    cycle1to3: { leads: 72, proposals: 22, closedDeals: 1 },
    cycle4to5: { leads: 72, proposals: 22, closedDeals: 0.8 },
    cycle6to12: { leads: 54, proposals: 16, closedDeals: 0.6 }
  }
};

// Add new $10,000 budget metrics constant
const BUDGET_10K_METRICS = {
  tier1: {
    cycle1: { leads: 178, proposals: 52, closedDeals: 18 },
    cycle2: { leads: 180, proposals: 45, closedDeals: 16 },
    cycle3: { leads: 151, proposals: 45, closedDeals: 13 },
    cycle4to6: { leads: 129, proposals: 39, closedDeals: 9 },
    cycle8to12: { leads: 129, proposals: 39, closedDeals: 7 }
  },
  tier2: {
    cycle1: { leads: 172, proposals: 52, closedDeals: 15 },
    cycle2: { leads: 151, proposals: 45, closedDeals: 13 },
    cycle3to4: { leads: 129, proposals: 39, closedDeals: 9 },
    cycle5to10: { leads: 129, proposals: 39, closedDeals: 7 },
    cycle12: { leads: 108, proposals: 32, closedDeals: 6 }
  },
  tier3: {
    cycle1: { leads: 151, proposals: 45, closedDeals: 11 },
    cycle2: { leads: 129, proposals: 39, closedDeals: 9 },
    cycle3to5: { leads: 129, proposals: 39, closedDeals: 7 },
    cycle6: { leads: 129, proposals: 39, closedDeals: 6 },
    cycle8to12: { leads: 108, proposals: 32, closedDeals: 5 }
  },
  tier4: {
    cycle1: { leads: 129, proposals: 39, closedDeals: 7 },
    cycle2to3: { leads: 129, proposals: 39, closedDeals: 6 },
    cycle4to5: { leads: 129, proposals: 39, closedDeals: 4 },
    cycle6to12: { leads: 108, proposals: 32, closedDeals: 3 }
  },
  tier5: {
    cycle1: { leads: 129, proposals: 39, closedDeals: 6 },
    cycle2to3: { leads: 129, proposals: 39, closedDeals: 4 },
    cycle4to6: { leads: 108, proposals: 32, closedDeals: 2 },
    cycle8to12: { leads: 86, proposals: 26, closedDeals: 1 }
  },
  tier6: {
    cycle1: { leads: 108, proposals: 32, closedDeals: 3 },
    cycle2to3: { leads: 108, proposals: 32, closedDeals: 2 },
    cycle4to10: { leads: 86, proposals: 26, closedDeals: 1 },
    cycle12: { leads: 65, proposals: 20, closedDeals: 0.9 }
  },
  tier7: {  // New tier for client value 1000000$ - infinite
    cycle1to3: { leads: 86, proposals: 26, closedDeals: 1 },
    cycle4to5: { leads: 86, proposals: 26, closedDeals: 1.0 },
    cycle6to12: { leads: 65, proposals: 20, closedDeals: 0.7 }
  }
};

const BUDGET_12K_METRICS: BudgetMetrics  = {
  tier1: {
    cycle1: { leads: 206, proposals: 62, closedDeals: 22 },
    cycle2: { leads: 180, proposals: 54, closedDeals: 19 },
    cycle3: { leads: 180, proposals: 54, closedDeals: 16 },
    cycle4to6: { leads: 155, proposals: 47, closedDeals: 11 },
    cycle8to12: { leads: 155, proposals: 47, closedDeals: 9 }
  },
  tier2: {
    cycle1: { leads: 206, proposals: 62, closedDeals: 18 },
    cycle2: { leads: 180, proposals: 54, closedDeals: 16 },
    cycle3to4: { leads: 155, proposals: 47, closedDeals: 11 },
    cycle5to10: { leads: 155, proposals: 47, closedDeals: 9 },
    cycle12: { leads: 129, proposals: 39, closedDeals: 7 }
  },
  tier3: {
    cycle1: { leads: 180, proposals: 54, closedDeals: 13 },
    cycle2: { leads: 155, proposals: 47, closedDeals: 11 },
    cycle3to5: { leads: 155, proposals: 47, closedDeals: 9 },
    cycle6: { leads: 155, proposals: 47, closedDeals: 7 },
    cycle8to12: { leads: 129, proposals: 39, closedDeals: 6 }
  },
  tier4: {
    cycle1: { leads: 155, proposals: 47, closedDeals: 9 },
    cycle2to3: { leads: 155, proposals: 47, closedDeals: 7 },
    cycle4to5: { leads: 155, proposals: 47, closedDeals: 4 },
    cycle6to12: { leads: 129, proposals: 39, closedDeals: 4 }
  },
  tier5: {
    cycle1: { leads: 155, proposals: 47, closedDeals: 7 },
    cycle2to3: { leads: 155, proposals: 47, closedDeals: 4 },
    cycle4to6: { leads: 129, proposals: 39, closedDeals: 2 },
    cycle8to12: { leads: 103, proposals: 31, closedDeals: 2 }
  },
  tier6: {
    cycle1: { leads: 129, proposals: 39, closedDeals: 4 },
    cycle2to3: { leads: 129, proposals: 39, closedDeals: 2 },
    cycle4to10: { leads: 103, proposals: 31, closedDeals: 1 },
    cycle12: { leads: 77, proposals: 23, closedDeals: 1 }
  },
  tier7: {
    cycle1: { leads: 103, proposals: 31, closedDeals: 2 },
    cycle2to5: { leads: 103, proposals: 31, closedDeals: 1 },
    cycle6to12: { leads: 77, proposals: 23, closedDeals: 0.9 }
  }
};

const getValueTier = (value: number) => {
  if (value < 5000) return 'tier1';
  if (value < 15000) return 'tier2';
  if (value < 50000) return 'tier3';
  if (value < 100000) return 'tier4';
  if (value < 500000) return 'tier5';
  if (value < 1000000) return 'tier6';
  return 'tier7';
};

// Function to get cycle key for $4000 budget
const get4kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: 'cycle4to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 10 ? 'cycle3to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle2to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle7to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle7to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  return tierRanges[cycle] || tierRanges.default;
};

// Function to get cycle key for $5000 budget
const get5kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 6 ? 'cycle3to6' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  return tierRanges[cycle] || tierRanges.default;
};

// Function to get cycle key for $6000 budget
const get6kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;

  return cycleKey;
};

// Function to get cycle key for $7000 budget
const get7kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;

  return cycleKey;
};




// Fix the get8kBudgetCycleKey function
const get8kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {  // Added logic for the new tier
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;
  
  return cycleKey;
};

const get9kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {  // Added logic for the new tier
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;
  
  return cycleKey;
};

// Function to get cycle key for $10,000 budget
const get10kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {  // Added logic for the new tier
      default: cycle <= 3 ? 'cycle1to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;
  
  return cycleKey;
};

const get12kBudgetCycleKey = (valueTier: string, cycle: number): string => {
  const cycleRanges: Record<string, Record<number | string, string>> = {
    tier1: {
      1: 'cycle1',
      2: 'cycle2',
      3: 'cycle3',
      default: cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier2: {
      1: 'cycle1',
      2: 'cycle2',
      default: cycle <= 4 ? 'cycle3to4' : cycle <= 10 ? 'cycle5to10' : 'cycle12'
    },
    tier3: {
      1: 'cycle1',
      2: 'cycle2',
      6: 'cycle6',
      default: cycle <= 5 ? 'cycle3to5' : 'cycle8to12'
    },
    tier4: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 5 ? 'cycle4to5' : 'cycle6to12'
    },
    tier5: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 6 ? 'cycle4to6' : 'cycle8to12'
    },
    tier6: {
      1: 'cycle1',
      default: cycle <= 3 ? 'cycle2to3' : cycle <= 10 ? 'cycle4to10' : 'cycle12'
    },
    tier7: {
      1: 'cycle1',
      default: cycle <= 5 ? 'cycle2to5' : 'cycle6to12'
    }
  };

  const tierRanges = cycleRanges[valueTier] || cycleRanges.tier1;
  const cycleKey = tierRanges[cycle] || tierRanges.default;

  return cycleKey;
};

type CycleKey = 'cycle1' | 'cycle2' | 'cycle3' | 'cycle4to12';
// Function to calculate metrics for $4000 budget
const calculateMetrics = (budget: number, clientValue: number, salesCycle: number) => {
  const defaultMetrics = { leads: 0, proposals: 0, closedDeals: 0 };
  
  try {
    const valueTier = getValueTier(clientValue);
    let metrics = defaultMetrics;
    const prospects = FIXED_PROSPECTS[budget] || 0;
    let cycleKey
    switch(budget) {
      case 4000:
        cycleKey = get4kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_4K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 5000:
        cycleKey = get5kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_5K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 6000:
        cycleKey = get6kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_6K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 7000:
        cycleKey = get7kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_7K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 8000:
        cycleKey = get8kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_8K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 9000:
        cycleKey = get9kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_9K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 10000:
        cycleKey = get10kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_10K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
      case 12000:
        cycleKey = get12kBudgetCycleKey(valueTier, salesCycle);
        metrics = BUDGET_12K_METRICS[valueTier][cycleKey] || defaultMetrics;
        break;
    }

    return {
      prospects,
      leads: metrics.leads,
      proposals: metrics.proposals,
      closedDeals: metrics.closedDeals,
      investment: budget,
      revenue: Math.round(metrics.closedDeals * clientValue)
    };
  } catch (error) {
    console.error('Error calculating metrics:', error);
    return {
      ...defaultMetrics,
      prospects: FIXED_PROSPECTS[budget] || 0,
      investment: budget,
      revenue: 0
    };
  }
};


const ROICalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [clientValue, setClientValue] = useState(15000);
  const [salesCycle, setSalesCycle] = useState(1);
  const [budget, setBudget] = useState(4000);
  const [error, setError] = useState('');

  const handleClientValueChange = (event:any) => {
    const value = parseFloat(event.target.value);
    setClientValue(value);
    if (error) setError('');
  };

  const handleCalculateClick = () => {
    if (validateInputs()) {
      setShowResults(true);
    }
  };

  const validateInputs = () => {
    if (clientValue < 1000) {
      setError('Client value must be at least $1,000');
      return false;
    }
    setError('');
    return true;
  };

  const metrics = useMemo(() => {
    return calculateMetrics(budget, clientValue, salesCycle);
  }, [budget, clientValue, salesCycle]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {!showResults ? (
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">ROI Calculator</h2>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-8">
            <div>
              <label htmlFor="budget" className="block mb-2">Select your budget</label>
              <div className="flex items-center gap-4">
                <Slider
                  id="budget"
                  value={[budget]}
                  min={4000}
                  max={12000}
                  step={1000}
                  onValueChange={(value) => setBudget(value[0])}
                  className="w-full"
                  aria-label="Budget amount"
                />
                <span className="min-w-[100px]">${budget.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <label htmlFor="clientValue" className="block mb-2">What is your average client value?</label>
              <div className="flex items-center gap-4">
                <Input
                  id="clientValue"
                  type="number"
                  min="1000"
                  value={clientValue}
                  onChange={handleClientValueChange}
                  className="w-full"
                  aria-label="Average client value"
                />
                <span>$ per customer</span>
              </div>
            </div>

            <div>
              <label htmlFor="salesCycle" className="block mb-2">How long is your average sales cycle?</label>
              <div className="flex items-center gap-4">
                <Slider
                  id="salesCycle"
                  value={[salesCycle]}
                  min={1}
                  max={12}
                  step={1}
                  onValueChange={(value) => setSalesCycle(value[0])}
                  className="w-full"
                  aria-label="Sales cycle length"
                />
                <span className="min-w-[100px]">{salesCycle} {salesCycle === 1 ? 'month' : 'months'}</span>
              </div>
            </div>

            <Button
              className="w-full mt-6"
              onClick={handleCalculateClick}
              aria-label="Calculate ROI"
            >
              Calculate ROI
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Would you invest</h2>
              <div className="text-4xl font-bold mb-4">${metrics.investment.toLocaleString()}</div>
              <p className="text-xl mb-6">to generate</p>
              <div className="text-4xl font-bold text-green-600">
                ${metrics.revenue.toLocaleString()}
              </div>
              <Button
                className="mt-8"
                onClick={() => setShowResults(false)}
                variant="outline"
                aria-label="Recalculate ROI"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Recalculate ROI
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-bold mb-4">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Prospects:</span>
                  <span className="font-bold">{metrics.prospects.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Leads:</span>
                  <span className="font-bold">{metrics.leads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposals:</span>
                  <span className="font-bold">{metrics.proposals.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Closed Deals:</span>
                  <span className="font-bold">{metrics.closedDeals.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ROICalculator;