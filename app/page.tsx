import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";
import { AIAgents } from "@/components/AIAgents";
import { GetStarted } from "@/components/GetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Process />
      <Solutions />
      <AIAgents />
      <GetStarted />
    </>
  );
}