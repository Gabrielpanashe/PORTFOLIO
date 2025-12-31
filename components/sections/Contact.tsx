"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "panashechandiwana11@gmail.com",
        href: "mailto:panashechandiwana11@gmail.com",
        color: "primary"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@Gabrielpanashe",
        href: "https://github.com/Gabrielpanashe",
        color: "secondary"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Gabriel Panashe",
        href: "https://linkedin.com/in/gabriel-panashe",
        color: "primary"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Chinhoyi, Zimbabwe",
        href: null,
        color: "secondary"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+263 777 000 000",
        href: "tel:+263777000000",
        color: "primary"
    }
];

export function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">{method.label}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                {method.value}
            </p>
        </motion.div>
    );

    return method.href ? (
        <a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="block"
        >
            {content}
        </a>
    ) : (
        <div key={index}>{content}</div>
    );
})}
                </motion.div >

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
    >
        <Button size="lg" className="group shadow-xl shadow-primary/20" asChild>
            <a href="mailto:panashechandiwana11@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Send me an email
            </a>
        </Button>
    </motion.div>
            </div >
        </section >
    );
}
