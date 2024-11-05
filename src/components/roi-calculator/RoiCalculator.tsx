// @ts-nocheck

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Bell, CheckIcon, ChevronDown, ChevronDownIcon, DollarSign, EuroIcon, PoundSterling, PoundSterlingIcon, Rocket, Search, Users } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';
import '../../app/custom.css';

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

const BUDGET_12K_METRICS: BudgetMetrics = {
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
// const calculateMetrics = (budget: number, clientValue: number, salesCycle: number, currency: string) => {
//   const defaultMetrics = { leads: 0, proposals: 0, closedDeals: 0 };

//   try {

//      // Convert budget and client value to USD for calculations
//      const budgetUSD = convertCurrency(budget, currency, 'USD');
//      const clientValueUSD = convertCurrency(clientValue, currency, 'USD');

//     const valueTier = getValueTier(clientValueUSD);
//     let metrics = defaultMetrics;
//     const prospects = FIXED_PROSPECTS[budgetUSD] || 0;
//     let cycleKey

//     switch (budgetUSD) {
//       case 4000:
//         cycleKey = get4kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_4K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 5000:
//         cycleKey = get5kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_5K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 6000:
//         cycleKey = get6kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_6K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 7000:
//         cycleKey = get7kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_7K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 8000:
//         cycleKey = get8kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_8K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 9000:
//         cycleKey = get9kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_9K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 10000:
//         cycleKey = get10kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_10K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//       case 12000:
//         cycleKey = get12kBudgetCycleKey(valueTier, salesCycle);
//         metrics = BUDGET_12K_METRICS[valueTier][cycleKey] || defaultMetrics;
//         break;
//     }

//     // Calculate revenue in USD first, then convert back to selected currency
// const revenueUSD = Math.round(metrics.closedDeals * clientValueUSD);
// const revenueInSelectedCurrency = convertCurrency(revenueUSD, 'USD', currency);

//     return {
//       prospects,
//       leads: metrics.leads,
//       proposals: metrics.proposals,
//       closedDeals: metrics.closedDeals,
//       investment: budget,
//       revenue: revenueInSelectedCurrency
//     };
//   } catch (error) {
//     console.error('Error calculating metrics:', error);
//     return {
//       ...defaultMetrics,
//       prospects: FIXED_PROSPECTS[budget] || 0,
//       investment: budget,
//       revenue: 0
//     };
//   }
// };

// Currency conversion rates
const CONVERSION_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79
};

const getValueTier = (value: number, currency: string): string => {

  // Convert client value to USD for tier calculation
  const valueInUSD = convertCurrency(value, currency, 'USD');

  if (valueInUSD >= 1000000) return 'tier7';
  if (valueInUSD >= 500000) return 'tier6';
  if (valueInUSD >= 250000) return 'tier5';
  if (valueInUSD >= 100000) return 'tier4';
  if (valueInUSD >= 50000) return 'tier3';
  if (valueInUSD >= 25000) return 'tier2';
  return 'tier1';
};


const formatCurrency = (amount, currency) => {
  const symbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  return `${symbols[currency]}${amount.toLocaleString()}`;
};

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const inUSD = amount / CONVERSION_RATES[fromCurrency];
  return Math.round(inUSD * CONVERSION_RATES[toCurrency]);
};

const ROICalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [clientValue, setClientValue] = useState(15000);
  const [salesCycle, setSalesCycle] = useState(1);
  const [budget, setBudget] = useState(4000);
  const [error, setError] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (newCurrency) => {
    const newClientValue = convertCurrency(clientValue, currency, newCurrency);
    const newBudget = convertCurrency(budget, currency, newCurrency);

    setClientValue(newClientValue);
    setBudget(newBudget);
    setCurrency(newCurrency);
  };

  const calculateMetrics = (budget: number, clientValue: number, salesCycle: number, currency: string) => {
    const defaultMetrics = { leads: 0, proposals: 0, closedDeals: 0 };

    try {

      // Convert budget and client value to USD for calculations
      const budgetUSD = convertCurrency(budget, currency, 'USD');
      const clientValueUSD = convertCurrency(clientValue, currency, 'USD');

      const valueTier = getValueTier(clientValueUSD, 'USD');
      let metrics = defaultMetrics;
      const prospects = FIXED_PROSPECTS[budgetUSD] || 0;
      let cycleKey

      switch (budgetUSD) {
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

        default:
          // Find the nearest budget tier
          const budgetTiers = [4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000];
          const nearestBudget = budgetTiers.reduce((prev, curr) => {
            return Math.abs(curr - budgetUSD) < Math.abs(prev - budgetUSD) ? curr : prev;
          });

          return calculateMetrics(
            convertCurrency(nearestBudget, 'USD', currency),
            clientValue,
            salesCycle,
            currency
          );
      }

      // Calculate revenue in USD first, then convert back to selected currency
      const revenueUSD = Math.round(metrics.closedDeals * clientValueUSD);
      const revenueInSelectedCurrency = convertCurrency(revenueUSD, 'USD', currency);

      return {
        prospects,
        leads: metrics.leads,
        proposals: metrics.proposals,
        closedDeals: metrics.closedDeals,
        investment: budget,
        revenue: revenueInSelectedCurrency
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

  const metrics = useMemo(() => {
    return calculateMetrics(budget, clientValue, salesCycle, currency);
  }, [budget, clientValue, salesCycle, currency]);

  const handleClientValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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


  return (
    <div className="max-w-7xl mx-auto space-y-10">

      <div className='space-y-2 relative'>
        {!showResults ? (
          <div className='space-y-5'>
            <Card className="p-5 lg:py-10 border border-borderColor max-w-[35rem] mx-auto rounded-2xl">
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-8">
                <div className='space-y-5'>
                  <label htmlFor="budget" className="mb-2 text-textColorTwo flex flex-col md:flex-row justify-between items-center gap-3">
                    <div>
                      <p className='text-xl font-semibold flex justify-center items-center gap-3'>
                        <span className="text-lg bg-buttonColor rounded-full text-foreground p-2 w-6 h-6 flex items-center justify-center">
                          1
                        </span>
                        What's your monthly budget?
                      </p>
                    </div>
                    <div className="min-w-[100px] flex justify-center items-center ml-auto md:ml-0">
                      <DropdownMenu>
                        <DropdownMenuTrigger className='border-none outline-none'>
                          <span className='flex justify-center items-center gap-1 cursor-pointer'>
                            {/* {
                              currency === 'USD' ? <DollarSign size={25} /> :
                                currency === 'EUR' ? <EuroIcon size={25} /> : <PoundSterlingIcon size={25} />
                            } */}
                            <ChevronDown size={25} />
                          </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-smallCard border border-borderColor'>
                          <DropdownMenuItem className='w-full text-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('USD')}
                          >
                            <DollarSign size={50} />
                            {currency === 'USD' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                          <DropdownMenuItem className='w-fulltext-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('EUR')}
                          >
                            <EuroIcon className='text-center' size={50} />
                            {currency === 'EUR' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                          <DropdownMenuItem className='w-full text-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('GBP')}
                          >
                            <PoundSterlingIcon size={50} />
                            {currency === 'GBP' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* {budget.toLocaleString()} */}
                      <p className='text-xl font-semibold'>{formatCurrency(budget, currency)}</p>
                    </div>
                  </label>
                  <div className="flex items-center gap-4 max-w-[95%] ml-auto">
                    <Slider
                      id="budget"
                      value={[budget]}
                      min={4000}
                      max={12000}
                      step={1000}
                      onValueChange={(value) => {
                        const newValue = value[0];
                        if (newValue === 11000) {
                          setBudget(10000);
                        } else {
                          setBudget(newValue);
                        }
                      }}
                      className="w-full cursor-pointer"
                      aria-label="Budget amount"
                    />
                  </div>
                </div>

                <div className='space-y-5'>
                  <label htmlFor="budget" className="mb-2 text-textColorTwo">
                    <div className='flex justify-start items-center gap-3'>
                      <p className='text-lg md:text-xl font-semibold flex justify-center items-center gap-3'><span className="text-lg bg-buttonColor rounded-full text-foreground p-2 w-6 h-6 flex items-center justify-center">
                        2
                      </span>
                        What's your average client value?
                      </p>
                    </div>
                  </label>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[95%] ml-auto">
                    <div className='flex justify-center items-center lg:max-w-[60%]'>
                      <DropdownMenu>
                        <DropdownMenuTrigger className='border-none outline-none'>
                          <span className='flex justify-center items-center gap-1 cursor-pointer'>
                            {
                              currency === 'USD' ? <DollarSign size={25} /> :
                                currency === 'EUR' ? <EuroIcon size={25} /> : <PoundSterlingIcon size={25} />
                            }
                            <ChevronDown size={25} />
                          </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-smallCard border border-borderColor'>
                          <DropdownMenuItem className='w-full text-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('USD')}
                          >
                            <DollarSign size={50} />
                            {currency === 'USD' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                          <DropdownMenuItem className='w-full text-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('EUR')}
                          >
                            <EuroIcon className='text-center' size={50} />
                            {currency === 'EUR' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                          <DropdownMenuItem className='w-full text-center hover:bg-secondary flex justify-between cursor-pointer'
                            onClick={() => handleCurrencyChange('GBP')}
                          >
                            <PoundSterlingIcon size={50} />
                            {currency === 'GBP' && <CheckIcon size={20} />}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <Input
                        id="clientValue"
                        type="number"
                        min="1000"
                        value={clientValue}
                        onChange={handleClientValueChange}
                        className="flex-1 text-lg"
                        aria-label="Average client value"
                      />
                    </div>
                    <span className='text-xl text-textColorTwo ml-auto md:ml-0'>per customer</span>
                  </div>
                </div>

                <div className='space-y-5'>
                  <label htmlFor="budget" className="mb-2 text-textColorTwo">
                    <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                      <div>
                        <p className='text-lg md:text-xl font-semibold flex justify-center items-center gap-3'>
                          <span className="text-lg bg-buttonColor rounded-full text-foreground p-2 w-6 h-6 flex items-center justify-center">
                            3
                          </span>
                          How long is your average sales cycle?
                        </p>
                      </div>
                      <span className=" text-textColorTwo text-lg ml-auto md:ml-0">{salesCycle}</span>
                    </div>
                  </label>
                  <div className="flex items-center gap-4 max-w-[95%] ml-auto">
                    <Slider
                      id="salesCycle"
                      value={[salesCycle]}
                      min={1}
                      max={12}
                      step={1}
                      onValueChange={(value) => setSalesCycle(value[0])}
                      className="w-full cursor-pointer"
                      aria-label="Sales cycle length"
                    />
                  </div>
                  <span className="flex justify-end text-lg text-textColorTwo">months sales cycle</span>
                </div>
              </div>
            </Card>
            <div
              onClick={handleCalculateClick}
              className="w-60 flex rounded-full mx-auto bg-gradient-to-tr from-gradientColorOne via-[#b372ce] to-[#ff7586] p-[2px] shadow-lg duration-300 transform group-hover:scale-105">
              <div className="flex-1 font-bold text-lg text-center bg-black px-10 py-5 rounded-full hover:scale-95 transition-all duration-300">
                Reveal Your Roi
              </div>
            </div>
          </div>
        ) : (
          <Card className="border-borderColor lg:w-4/5 mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-12">
              <div className='space-y-5 flex-1'>
                <div>
                  <p className='text-2xl text-center lg:text-right font-bold text-textColorTwo leading-3'>Would you invest
                    <span className='text-3xl text-secondary font-bold'> {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}{metrics.investment.toLocaleString()}</span> <br></br>
                    to generate
                    <span className='text-3xl text-gradientColorFive font-bold'> {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}{metrics.revenue.toLocaleString()}</span>
                  </p>
                  <p className='text-2xl font-bold text-textColorTwo mb-5 text-center lg:text-right'>revenue each month?</p>

                  <p className='text-textColorTwo text-lg text-center lg:text-right'>No long-term commitment required.<br></br>
                    <span className='text-sm'>Excludes one-off setup fee.</span></p>
                </div>

                <div className='space-y-3'>
                  <div
                    className="w-60 flex rounded-full ml-auto shadow-lg duration-300 transform group-hover:scale-105 cursor-pointer">
                    <div className="flex-1 flex items-center justify-center text-center font-semibold text-lg bg-buttonColor text-foreground hover:scale-95 transition-all duration-300 py-3 rounded-full hover:bg-buttonHoverColor">
                      Book a Demo
                    </div>
                  </div>
                  <p
                    onClick={() => setShowResults(false)}
                    className='flex items-center justify-end cursor-pointer text-gradientColorFive mr-3'><ArrowLeft className="mr-2 h-4 w-4" />
                    Recalculate ROI</p>
                </div>
              </div>
              <div className="md:max-w-[60%] lg:border-l border-borderColor flex-1">
                <div className="space-y-1 py-5">
                  <div className="trapezoid flex justify-between px-5 py-3 w-[90%] lg:w-[75%] mx-auto rounded-sm">
                    <span>Prospects</span>
                    <span className="font-bold">{metrics.prospects.toLocaleString()}</span>
                  </div>
                  <div className='trapezoidtwo py-2 lg:py-3 rounded-sm w-[77%] lg:w-[66%] h-44 mx-auto relative'>
                    <p className='text-center mb-2 text-sm'>Multi-channel engagement campaign</p>
                    <div className='flex justify-center items-center gap-3 lg:gap-5'>
                      <div className='group'>
                        <Users className='scale-90 opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer' size={25} />
                        <p className='absolute w-max opacity-0 text-xs left-1/2 bottom-0 lg:bottom-3 transform -translate-x-1/2 opacecity-0 group-hover:opacity-100 transition-all'>Dedicated outreach consultant</p>
                      </div>
                      <div className='group'>
                        <Rocket className='scale-90 opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer' size={25} />
                        <p className='absolute w-max opacity-0 text-xs left-1/2 bottom-0 lg:bottom-3 transform -translate-x-1/2 opacecity-0 group-hover:opacity-100 transition-all'>Multi-channel prospecting campaigns</p>
                      </div>
                      <div className='group'>
                        <Rocket className='scale-90 opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer' size={25} />
                        <p className='absolute w-max opacity-0 text-xs left-1/2 bottom-0 lg:bottom-3 transform -translate-x-1/2 opacecity-0 group-hover:opacity-100 transition-all'>Multi-channel prospecting campaigns</p>
                      </div>
                      <div className='group'>
                        <Bell className='scale-90 opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer' size={25} />
                        <p className='absolute w-max opacity-0 text-xs left-1/2 bottom-0 lg:bottom-3 transform -translate-x-1/2 opacecity-0 group-hover:opacity-100 transition-all'>Website buyer intent data</p>
                      </div>
                      <div className='group'>
                        <Search className='scale-90 opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer' size={25} />
                        <p className='absolute w-max opacity-0 text-xs left-1/2 bottom-0 lg:bottom-3 transform -translate-x-1/2 opacecity-0 group-hover:opacity-100 transition-all'>Targeted and complainet dataset</p>
                      </div>

                    </div>
                  </div>
                  <div className="trapezoidthree flex justify-between px-5 py-3 w-[61%] lg:w-[55%] mx-auto rounded-sm">
                    <span className='text-sm md:text-lg'>Leads</span>
                    <span className="font-bold text-sm md:text-lg">{metrics.leads.toLocaleString()}</span>
                  </div>
                  <div className="trapezoidthree flex justify-between px-5 py-3 w-[54%] lg:w-[51%] mx-auto rounded-sm">
                    <span className='text-sm md:text-lg'>Proposals</span>
                    <span className="font-bold text-sm md:text-lg">{metrics.proposals.toLocaleString()}</span>
                  </div>
                  <div className="trapezoidfour flex justify-between px-3 lg:px-5 py-3 w-[48%] lg:w-[47%] mx-auto rounded-sm">
                    <span className='text-sm md:text-lg'>Closed Deals</span>
                    <span className="font-bold text-sm md:text-lg">{metrics.closedDeals.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="opacity-[0.5] blur-[100px] w-full max-w-[44%] min-h-[74%] absolute bottom-12 right-10 lg:bottom-16 lg:right-52 -z-10 transition-all">
          <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] top-0 right-0"></div>
          <div className="bg-gradientColorFive absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%] bottom-0 right-0"></div>
          <div className="bg-gradientColorFour absolute rounded-full opacity-50 w-[70%] min-w-[70%] min-h-[70%] max-h-[70%]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculator;