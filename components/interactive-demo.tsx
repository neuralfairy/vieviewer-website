"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const demoLeads = [
  { name: "Acme Corp", score: 95, status: "hot", industry: "Technology", employees: "500+" },
  { name: "Global Solutions", score: 78, status: "warm", industry: "Manufacturing", employees: "200-500" },
  { name: "StartupXYZ", score: 45, status: "cold", industry: "SaaS", employees: "10-50" },
  { name: "Enterprise Inc", score: 89, status: "hot", industry: "Finance", employees: "1000+" },
]

export function InteractiveDemo() {
  const [selectedLead, setSelectedLead] = useState(demoLeads[0])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See iLMS in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our AI-powered lead scoring works with real-time data analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Lead Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {demoLeads.map((lead, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedLead.name === lead.name
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                          <p className="text-sm text-gray-600">{lead.industry}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{lead.score}</div>
                          <Badge
                            variant={
                              lead.status === "hot" ? "destructive" : lead.status === "warm" ? "default" : "secondary"
                            }
                          >
                            {lead.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead Analysis: {selectedLead.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Score</span>
                    <span className="text-2xl font-bold text-blue-600">{selectedLead.score}/100</span>
                  </div>
                  <Progress value={selectedLead.score} className="h-3" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Company Size</div>
                    <div className="font-semibold">{selectedLead.employees}</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Industry</div>
                    <div className="font-semibold">{selectedLead.industry}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Engagement Score</span>
                    <span className="font-semibold">85/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fit Score</span>
                    <span className="font-semibold">92/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Intent Score</span>
                    <span className="font-semibold">78/100</span>
                  </div>
                </div>

                <Button className="w-full">View Full Analysis</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
