
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
    <div className="border-2 border-purple-100 rounded-xl p-6">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-2 border-purple-100 rounded-lg px-4 hover:border-purple-200 transition-colors"
          >
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="border-t border-purple-50">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
