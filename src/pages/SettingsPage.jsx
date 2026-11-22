
import {
  UserRound,
  Clock,
  Palette,
  Settings,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function SettingsPage() {
  return (
    <div>

      <PageHeader
        eyebrow="Make it yours"
        title="Settings"
        description="Customise your study space and preferences."
      />

      <section className="surface-card p-6 md:p-8 max-w-3xl">

        <div className="flex items-center gap-3 mb-7">
          <div className="w-11 h-11 bg-teal-light text-teal rounded-xl flex items-center justify-center">
            <Settings size={22} />
          </div>

          <div>
            <h2 className="font-bold text-ink">
              Personal preferences
            </h2>

            <p className="text-sm text-muted">
              Manage your StudyFlow experience.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <UserRound size={19} className="text-teal" />
              <label className="font-semibold text-sm text-ink">
                Display name
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-teal"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={19} className="text-teal" />
              <label className="font-semibold text-sm text-ink">
                Preferred study duration
              </label>
            </div>

            <select
              defaultValue="25"
              className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-teal bg-white"
            >
              <option value="15">15 minutes</option>
              <option value="25">25 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette size={19} className="text-teal" />
              <label className="font-semibold text-sm text-ink">
                Appearance
              </label>
            </div>

            <select
              defaultValue="light"
              className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-teal bg-white"
            >
              <option value="light">Light appearance</option>
              <option value="dark">Dark appearance</option>
            </select>
          </div>

        </div>

        <button className="primary-button mt-8">
          Save preferences
        </button>

      </section>

    </div>
  );
}

export default SettingsPage;