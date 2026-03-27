"use client";
import { Input, Textarea } from "@heroui/react";
import RightArrowIcon from "@src/svg/RightArrowIcon";

export default function ContactUsForm() {
    return (
        <div className="contact-form flex-1">
            <Input
                label="Your Name"
                labelPlacement="outside-top"
                type="text"
                placeholder="Enter Your Name"
                classNames={{
                    inputWrapper: "input-field-wrapper"
                }}
            />
            <Input
                label="Email Address"
                labelPlacement="outside-top"
                type="email"
                placeholder="Enter Email Address"
                classNames={{
                    inputWrapper: "input-field-wrapper"
                }}
            />
            <Input
                label="Subject"
                labelPlacement="outside-top"
                type="text"
                placeholder="How can we help you?"
                classNames={{
                    inputWrapper: "input-field-wrapper"
                }}
            />
            <Textarea
                label="Message"
                labelPlacement="outside-top"
                type="text"
                placeholder="Tell us more about your inquiry... "
                minRows={6}
                classNames={{
                    inputWrapper: "input-field-wrapper pt-2!"
                }}
            />
            <button type="button" className="cta-primary max-w-full!">Send Message <RightArrowIcon /></button>
        </div>
    )
}
