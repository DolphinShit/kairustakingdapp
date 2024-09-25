"use client";

import { ConnectButton } from "thirdweb/react";
import Link from "next/link";
import { client } from "./client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Example App",
          url: "https://example.com",
        }}
      />

      {/* Staking UI Box */}
      <div className="mt-6 p-4 rounded-lg bg-white shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-bold text-center mb-4 text-blue-800">Staking Tiers</h2>
        <div className="flex justify-between space-x-4">
          {/* Gold Tier */}
          <div className="flex-1 p-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg">
            <h3 className="text-lg font-bold">Gold Tier</h3>
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-semibold">REWARDS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">50% LP-FEES</div>
              </div>
              <div>
                <span className="font-semibold">AMOUNT:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">15m Kairu</div>
              </div>
              <div>
                <span className="font-semibold">LOCKED:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">15 days</div>
              </div>
              <div>
                <span className="font-semibold">STAKED WALLETS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">—</div>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2">
                Stake
              </button>
            </div>
          </div>

          {/* Silver Tier */}
          <div className="flex-1 p-4 rounded-lg bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-lg">
            <h3 className="text-lg font-bold">Silver Tier</h3>
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-semibold">REWARDS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">35% LP-FEES</div>
              </div>
              <div>
                <span className="font-semibold">AMOUNT:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">7.5m Kairu</div>
              </div>
              <div>
                <span className="font-semibold">LOCKED:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">20 days</div>
              </div>
              <div>
                <span className="font-semibold">STAKED WALLETS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">—</div>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2">
                Stake
              </button>
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="flex-1 p-4 rounded-lg bg-[#cd7f32] text-white shadow-lg">
            <h3 className="text-lg font-bold">Bronze Tier</h3>
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-semibold">REWARDS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">15% LP-FEES</div>
              </div>
              <div>
                <span className="font-semibold">AMOUNT:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">3.75m Kairu</div>
              </div>
              <div>
                <span className="font-semibold">LOCKED:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">30 days</div>
              </div>
              <div>
                <span className="font-semibold">STAKED WALLETS:</span>
                <div className="bg-gray-200 p-2 rounded mt-1">—</div>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white rounded-lg py-2">
                Stake
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Link to Swap UI */}
      <div className="mt-6">
        <Link href="/swap">
          <button className="bg-blue-600 text-white rounded-lg py-2 px-6">
            Go to Swap UI
          </button>
        </Link>
      </div>
    </main>
  );
}
