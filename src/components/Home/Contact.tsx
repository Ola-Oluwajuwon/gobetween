"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const Contact = () => {
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Here you would normally send the data to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block pb-2 border-b-2 border-blue-500">
            Contact
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get in touch with me
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  Location:
                </h3>
                <p className="text-gray-600">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Email:</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Call:</h3>
                <p className="text-gray-600">+1 5589 55488 55</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1655879056711!5m2!1sen!2s"
                className="w-full h-64 rounded-lg mt-4"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      {...form.register("name")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Name"
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      {...form.register("email")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Email"
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...form.register("subject")}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    {...form.register("message")}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[160px]"
                    placeholder="Write your message here"
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
