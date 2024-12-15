import SectionHeader from "src/components/atoms/typography/section-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What are the ingredients of the solution?",
      answer:
        "The solution contains essential vitamins, minerals, and electrolytes specifically formulated for your treatment needs. The exact ingredients vary by treatment type.",
    },
    {
      question: "When do I feel its effects?",
      answer:
        "Most people begin feeling the effects during or immediately after treatment, with benefits lasting several days to weeks depending on the treatment.",
    },
    {
      question: "Does it have side effects?",
      answer:
        "While most patients tolerate treatments well, minor side effects may include temporary discomfort at the injection site or mild temperature changes.",
    },
    {
      question: "Is the solution safe and FDA-approved?",
      answer:
        "Yes, all our solutions use FDA-approved ingredients and are prepared in compliance with strict safety standards.",
    },
    {
      question: "Do I need to be tested beforehand?",
      answer:
        "A brief medical consultation is required before treatment to ensure the therapy is appropriate for you.",
    },
    {
      question: "Is it an in-house service?",
      answer:
        "Yes, all treatments are administered in our clinical facility by licensed medical professionals.",
    },
    {
      question: "How do I pay and book an appointment?",
      answer:
        "You can book appointments online through our website or by phone. We accept most major payment methods and some insurance plans.",
    },
    {
      question: "What is the gender of the medical team?",
      answer:
        "We have a diverse medical team available. You can request specific preferences when booking your appointment.",
    },
    {
      question: "How long is the session?",
      answer:
        "Most IV therapy sessions take between 30-60 minutes, depending on the specific treatment.",
    },
    {
      question: "Does it hurt?",
      answer:
        "Most patients experience minimal discomfort. Our skilled professionals ensure a comfortable experience with gentle insertion techniques.",
    },
  ]

  return (
    <div className="py-12">
      <SectionHeader title="IV Drips FAQs" />
      <div className="container px-4 mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
