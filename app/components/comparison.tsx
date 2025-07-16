import { Check, X } from "lucide-react"

export default function Comparison() {
  const comparisons = [
    {
      criteria: "Transaction Fee",
      preTGE: "Pre-TGE: 0.5% - 1% (Up to 10x cheaper)",
      others: "5% - 10% or more",
    },
    {
      criteria: "How it Works",
      preTGE: "Pre-TGE: Automated Escrow Smart Contract (Decentralized & Trustless)",
      others: "Manual middleman or P2P deals",
    },
    {
      criteria: "Product Performance",
      preTGE: "Pre-TGE: Instant matching & settlement (Optimized for speed)",
      others: "Slow, requires manual confirmation",
    },
    {
      criteria: "Customization (Seller)",
      preTGE: "Pre-TGE: Full Storefront Control (Stats, feedback, order management)",
      others: "Basic listing forms",
    },
    {
      criteria: "Customization (Buyer)",
      preTGE: "Pre-TGE: 1-Click Buy & Portfolio (Simple & efficient)",
      others: "Clunky interface, manual tracking",
    },
  ]

  return (
    <section id="comparison" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
      <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">The Comparison</p>
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">A Clearer, Fairer Choice</h2>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-6 text-left text-gray-900 font-semibold text-lg">Criteria</th>
                <th className="p-6 text-left text-blue-600 font-semibold text-lg">Pre-TGE</th>
                <th className="p-6 text-left text-gray-500 font-semibold text-lg">Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="p-6 font-medium text-gray-900">{item.criteria}</td>
                  <td className="p-6 text-green-600">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item.preTGE}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-500">
                    <div className="flex items-start">
                      <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-500" />
                      <span>{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
