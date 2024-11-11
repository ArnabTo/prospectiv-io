import { useEffect, useState } from "react";

interface CampaignEvent {
  event: string;
  date: string;
}

export const campaignDateCalculator = (currentDate = new Date()): CampaignEvent[] => {
  const events: CampaignEvent[] = [];

  // "You are here" event (current date and time set to 15:18)
  currentDate.setHours(15, 18, 0, 0); // Set time to 15:18
  events.push({
    event: "You are here",
    date: currentDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });

  // Adding 2 hours for the next two events at 17:18
  const consultationDate = new Date(currentDate);
  consultationDate.setHours(17, 18);
  events.push({
    event: "Consultation and demo",
    date: consultationDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });

  const proposalDate = new Date(currentDate);
  proposalDate.setHours(17, 18);
  events.push({
    event: "Proposal",
    date: proposalDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });

  // Adding 8 days for the "Onboarding" event at 09:00
  const onboardingDate = new Date(currentDate);
  onboardingDate.setDate(currentDate.getDate() + 8);
  onboardingDate.setHours(9, 0, 0, 0); // Set time to 09:00
  events.push({
    event: "Onboarding",
    date: onboardingDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });

  // Adding 22 days for the "Go Live" event at 09:00
  const goLiveDate = new Date(currentDate);
  goLiveDate.setDate(currentDate.getDate() + 22);
  goLiveDate.setHours(9, 0, 0, 0); // Set time to 09:00
  events.push({
    event: "Go Live",
    date: goLiveDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });

  return events;
};