
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What are clinical trials?",
    answer: "Clinical trials are research studies that test how well new medical approaches work in people. These studies help find better ways to prevent, screen for, diagnose, or treat diseases.",
  },
  {
    question: "Is participating in a clinical trial safe?",
    answer: "Clinical trials follow strict scientific standards and ethical guidelines to protect participants. Each trial is approved and monitored by an Institutional Review Board (IRB) that ensures risks are minimal and worth any potential benefits.",
  },
  {
    question: "How long do trials typically last?",
    answer: "The duration varies greatly depending on what's being studied. Some trials last days or weeks, while others may continue for months or years. The specific timeframe will be clearly communicated before you agree to participate.",
  },
  {
    question: "Will I be compensated for participating?",
    answer: "Most clinical trials offer compensation for participants' time and commitment. The amount varies by study and will be clearly outlined in the study information.",
  },
];

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
