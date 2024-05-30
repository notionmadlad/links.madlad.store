import { generateURL } from "@/lib/utils";
import { AppWindow, Banknote, Check, Instagram, Linkedin, Mail, Twitter, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export const faqs = {
  q1: {
    title: (
      <span>
        <AppWindow className="inline-flex size-[26px] mr-1" /> What is Notion?
      </span>
    ),
    content: (
      <span>
        Notion is an all-in-one workspace that allows you to take notes, add
        tasks, manage projects, and get organized. Notion has a versatile design
        for getting things done, whether you&#39;re writing or planning.
      </span>
    ),
  },
  q2: {
    title: (
      <span>
        <Banknote className="inline-flex size-[26px] mr-1" /> Will I need to pay
        for a Notion subscription?
      </span>
    ),
    content: (
      <span>
        No, Notion does offer a free personal plan with no strings attached.
      </span>
    ),
  },
  q3: {
    title: (
      <span>
        <Check className="inline-flex size-[26px] mr-1" /> How will I receive a
        template?
      </span>
    ),
    content: (
      <span>
        After purchase, you&#39;ll receive a link to duplicate the Notion
        template to your workspace.
      </span>
    ),
  },
  q4: {
    title: (
      <span>
        <UserRoundCheck className="inline-flex size-[26px] mr-1" /> How can I
        become an affiliate?
      </span>
    ),
    content: (
      <span>
        <Link
          href="https://gumroad.madlad.store/affiliates"
          className="underline"
        >
          Click here
        </Link>{" "}
        to fill out the affiliate form.
      </span>
    ),
  },
  q5: {
    title: (
      <span>
        <Mail className="inline-flex size-[26px] mr-1" /> Have more questions?
      </span>
    ),
    content: (
      <span>
        Send your question at{" "}
        <Link
          href="mailto:martin.nicolai.online@gmail.com"
          className="underline"
        >
          martin.nicolai.online@gmail.com
        </Link>
        .
      </span>
    ),
  },
};

export const mainLinks = {
  l1: {
    title: "The Madlad Gumroad",
    link: generateURL("gumroad"),
    image: "/madlad-logo.png",
    content: "The Best Notion Templates on the Internet"
  },
  l2: {
    title: "The Madlad Store",
    link: generateURL("store"),
    image: "/madlad-logo.png",
    content: "Discover the best Website and Notion Templates"
  },
  l3: {
    title: "The Madlad Blog",
    link: generateURL("blog"),
    image: "/madlad-logo.png",
    content: "Read about Notion, Programming and Websites"
  }
}

export const socialLinks = {
  l1: {
    title: "Twitter (X)",
    link: generateURL("twitter"),
    icon: Twitter
  },
  l2: {
    title: "Instagram",
    link: generateURL("instagram"),
    icon: Instagram
  },
  l3: {
    title: "LinkedIn",
    link: generateURL("linkedin"),
    icon: Linkedin
  }
}

export const footerLinks = {
  "Terms of Service": generateURL("local:tos"),
  "Privacy Policy": generateURL("local:privacy"),
  FAQs: generateURL("local:faqs"),
};