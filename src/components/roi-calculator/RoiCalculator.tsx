import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

const ROICalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [budget, setBudget] = useState(4000);
  const [clientValue, setClientValue] = useState(15000);
  const [salesCycle, setSalesCycle] = useState(1);
  
  const calculateMetrics = () => {
    // Prospect calculation (roughly 250 prospects per $1000 budget)
    const prospects = Math.round(budget * (250/1000));
    
    // Lead calculation: Affected by sales cycle
    // Base conversion rate is 4% for 1 month cycle, decreases with longer cycles
    const leadConversionRate = 0.04 - (salesCycle - 1) * 0.002;
    const leads = Math.round(prospects * leadConversionRate);
    
    // Proposal calculation: ~30% of leads
    const proposals = Math.round(leads * 0.3);
    
    // Closed deals calculation
    // Base rate is ~27% of proposals for low client values (<5000)
    // ~23% for medium values (5000-50000)
    // ~6.5% for high values (>50000)
    let closedDealRate;
    if (clientValue <= 5000) {
      closedDealRate = 0.27;
    } else if (clientValue <= 50000) {
      closedDealRate = 0.23;
    } else {
      closedDealRate = 0.065;
    }
    
    const closedDeals = Math.round(proposals * closedDealRate);
    
    // Revenue calculation
    const revenue = closedDeals * clientValue;
    
    return {
      prospects,
      leads,
      proposals,
      closedDeals,
      investment: budget,
      revenue
    };
  };
  
  const metrics = calculateMetrics();

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {!showResults ? (
        <Card className="p-6 border border-borderColor">
          <h2 className="text-2xl font-bold mb-6">ROI Calculator</h2>
          
          <div className="space-y-8">
            <div>
              <label className="block mb-2">What's your monthly budget?</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[budget]}
                  min={4000}
                  max={12000}
                  step={1000}
                  onValueChange={(value) => setBudget(value[0])}
                  className="w-full"
                />
                <span className="min-w-[100px]">${budget}</span>
              </div>
            </div>
            
            <div>
              <label className="block mb-2">What is your average client value?</label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  value={clientValue}
                  onChange={(e) => setClientValue(Number(e.target.value))}
                  className="w-full"
                />
                <span>$ per customer</span>
              </div>
            </div>
            
            <div>
              <label className="block mb-2">How long is your average sales cycle?</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[salesCycle]}
                  min={1}
                  max={12}
                  step={1}
                  onValueChange={(value) => setSalesCycle(value[0])}
                  className="w-full"
                />
                <span className="min-w-[100px]">{salesCycle} months</span>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6"
              onClick={() => setShowResults(true)}
            >
              Calculate ROI
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6 border border-borderColor">
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
                  <span className="font-bold">{metrics.prospects}</span>
                </div>
                <div className="flex justify-between">
                  <span>Leads:</span>
                  <span className="font-bold">{metrics.leads}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposals:</span>
                  <span className="font-bold">{metrics.proposals}</span>
                </div>
                <div className="flex justify-between">
                  <span>Closed Deals:</span>
                  <span className="font-bold">{metrics.closedDeals}</span>
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