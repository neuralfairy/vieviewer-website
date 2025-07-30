"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ROICalculator() {
  const [leads, setLeads] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2)
  const [dealValue, setDealValue] = useState(5000)

  const currentRevenue = leads * (conversionRate / 100) * dealValue
  const improvedConversionRate = conversionRate * 1.4 // 40% improvement
  const improvedRevenue = leads * (improvedConversionRate / 100) * dealValue
  const additionalRevenue = improvedRevenue - currentRevenue
  const monthlyROI = additionalRevenue - 299 // Assuming Professional plan

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI with iLMS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate by improving your lead conversion rates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Current Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="leads">Monthly Leads</Label>
                  <Input
                    id="leads"
                    type="number"
                    value={leads}
                    onChange={(e) => setLeads(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="conversion">Conversion Rate (%)</Label>
                  <Input
                    id="conversion"
                    type="number"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="deal-value">Average Deal Value ($)</Label>
                  <Input
                    id="deal-value"
                    type="number"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Potential with iLMS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Current Monthly Revenue</span>
                    <span className="text-xl font-bold text-gray-900">${currentRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Improved Monthly Revenue</span>
                    <span className="text-xl font-bold text-green-600">${improvedRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">Additional Monthly Revenue</span>
                    <span className="text-xl font-bold text-blue-600">${additionalRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">
                    <span className="font-medium">Monthly ROI</span>
                    <span className="text-xl font-bold">${monthlyROI.toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Start Your Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
