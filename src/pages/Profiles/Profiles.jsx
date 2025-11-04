import React from "react";
import { useParams } from "react-router-dom";
import ProfileDetails from "../../components/profile/ProfileDetails";

// Sample mock data
const sampleProfiles = [
  {
    id: "1",
    name: "Ayesha Rahman",
    age: 24,
    height: "5'4\"",
    religion: "Muslim",
    maritalStatus: "Never Married",
    location: "Dhaka, Bangladesh",
    photo: "https://i.ibb.co/7kYjz6z/profile.jpg",
    verified: true,
    isPremium: true,
    matchPercent: 92,
    about:
      "I am a simple, friendly, family-oriented person. Looking for a compatible partner.",
    education: "BSc in CSE",
    profession: "Software Engineer",
    income: "40k–70k BDT",
    father: "Businessman",
    mother: "Homemaker",
    siblings: "1 Brother, 1 Sister",
    showContact: true,
    email: "ayesha@example.com",
    phone: "+8801723456789",
  },
  {
    id: "2",
    name: "Rafiq Ahmed",
    age: 27,
    height: "5'8\"",
    religion: "Muslim",
    maritalStatus: "Never Married",
    location: "Chittagong, Bangladesh",
    photo: "https://i.ibb.co/fX1YwQ0/profile2.jpg",
    verified: false,
    isPremium: false,
    matchPercent: 88,
    about: "Friendly, responsible and caring. Looking for a loving partner.",
    education: "BBA",
    profession: "Business Analyst",
    income: "50k–80k BDT",
    father: "Retired Officer",
    mother: "Homemaker",
    siblings: "2 Brothers",
    showContact: false,
    email: "rafiq@example.com",
    phone: "+8801712345678",
  },
];

export default function ProfilePage() {
  const { id } = useParams();

  // Find profile by id
  const profile = sampleProfiles.find((p) => p.id === id) || null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {profile ? (
        <ProfileDetails profile={profile} />
      ) : (
        <div className="text-center text-red-500 mt-10">
          Profile not found!
        </div>
      )}
    </div>
  );
}
