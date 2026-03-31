"use client";
import { Input, Textarea } from "@heroui/react";
import useContactForm from "@src/hooks/useContactForm";
import RightArrowIcon from "@src/svg/RightArrowIcon";

export default function ContactUsForm() {
	const { formik } = useContactForm();
	return (
		<div className="contact-form flex-1">
			<Input
				label="Your Name"
				labelPlacement="outside-top"
				type="text"
				placeholder="Enter Your Name"
				classNames={{
					inputWrapper: `
      input-field-wrapper
      !bg-white
      data-[hover=true]:!bg-default-200
      group-data-[focus=true]:!bg-white

      !border-gray-300
      data-[invalid=true]:!border-gray-300

      data-[invalid=true]:!bg-white
      data-[invalid=true]:focus:!bg-white

      !ring-0
      data-[invalid=true]:!ring-0
    `,
					input: "text-gray-900",
					label: `
      !text-black
      data-[invalid=true]:!text-black
      group-data-[focus=true]:!text-black
    `,
				}}
				{...formik.getFieldProps("name")}
				isInvalid={!!formik.errors.name && formik.touched.name}
				errorMessage={formik.touched.name && formik.errors.name}
			/>
			<Input
				label="Email Address"
				labelPlacement="outside-top"
				type="email"
				placeholder="Enter Email Address"
				classNames={{
					inputWrapper: `
      input-field-wrapper
      !bg-white
      data-[hover=true]:!bg-default-200
      group-data-[focus=true]:!bg-white

      !border-gray-300
      data-[invalid=true]:!border-gray-300

      data-[invalid=true]:!bg-white
      data-[invalid=true]:focus:!bg-white

      !ring-0
      data-[invalid=true]:!ring-0
    `,
					label: `
      !text-black
      data-[invalid=true]:!text-black
      group-data-[focus=true]:!text-black
    `,
				}}
				{...formik.getFieldProps("email")}
				isInvalid={!!formik.errors.email && formik.touched.email}
				errorMessage={formik.touched.email && formik.errors.email}
			/>
			<Input
				label="Subject"
				labelPlacement="outside-top"
				type="text"
				placeholder="How can we help you?"
				classNames={{
					inputWrapper: `
      input-field-wrapper
      !bg-white
      data-[hover=true]:!bg-default-200
      group-data-[focus=true]:!bg-white

      !border-gray-300
      data-[invalid=true]:!border-gray-300

      data-[invalid=true]:!bg-white
      data-[invalid=true]:focus:!bg-white

      !ring-0
      data-[invalid=true]:!ring-0
    `,
					label: `
      !text-black
      data-[invalid=true]:!text-black
      group-data-[focus=true]:!text-black
    `,
				}}
				{...formik.getFieldProps("subject")}
				isInvalid={!!formik.errors.subject && formik.touched.subject}
				errorMessage={formik.touched.subject && formik.errors.subject}
			/>
			<Textarea
				label="Message"
				labelPlacement="outside-top"
				type="text"
				placeholder="Tell us more about your inquiry... "
				minRows={6}
				classNames={{
					inputWrapper: `
      input-field-wrapper 
	  pt-4!
      !bg-white
      data-[hover=true]:!bg-white
      group-data-[focus=true]:!bg-white

      !border-gray-300
      data-[invalid=true]:!border-gray-300

      data-[invalid=true]:!bg-white
      data-[invalid=true]:focus:!bg-white

      !ring-0
      data-[invalid=true]:!ring-0
    `,
					label: `
      !text-black
      data-[invalid=true]:!text-black
      group-data-[focus=true]:!text-black
    `,
				}}
				{...formik.getFieldProps("message")}
				isInvalid={!!formik.errors.message && formik.touched.message}
				errorMessage={formik.touched.message && formik.errors.message}
			/>
			<button
				type="button"
				className="cta-primary max-w-full!"
				onClick={formik.submitForm}
			>
				Send Message <RightArrowIcon />
			</button>
		</div>
	);
}
