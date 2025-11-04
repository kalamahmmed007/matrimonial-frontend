// src/components/profile/ProfileDetails.jsx
import React from "react";
import { CheckCircle, Star, MapPin, Mail, Phone } from "lucide-react";

export default function ProfileDetails({ profile }) {
  if (!profile) {
    return (
      <div className="text-center text-gray-500 py-10">
        No profile selected.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 h-72 rounded-xl overflow-hidden shadow">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-semibold">{profile.name}</h2>
            {profile.verified && <CheckCircle className="text-blue-600 w-6 h-6" />}
            {profile.isPremium && <Star className="text-yellow-500 w-6 h-6" />}
          </div>

          <p className="text-gray-600 mt-1">
            {profile.age} years • {profile.height} • {profile.religion}
          </p>

          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="w-5 h-5 mr-1" /> {profile.location}
          </div>

          {profile.matchPercent && (
            <p className="mt-2 text-green-600 font-medium">
              ✅ {profile.matchPercent}% Match with your preferences
            </p>
          )}

          {/* Actions */}
          <div className="mt-4 flex gap-4">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Chat Now
            </button>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              Like Profile
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-6"></div>

      {/* About / Bio */}
      <div>
        <h3 className="text-xl font-semibold mb-2">About</h3>
        <p className="text-gray-700 leading-relaxed">{profile.about}</p>
      </div>
    </div>
  );
}
