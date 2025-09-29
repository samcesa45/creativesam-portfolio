'use client';
import React from 'react';
import {
  contactFormSchema,
  createContactInput,
  useCreateContact,
} from '../api/create';
import { UseFormReturn } from 'react-hook-form';
import { formatErrors } from '@/lib/utils';
import { Form, Input, Textarea } from '@/ui/form';
import { toast } from 'sonner';
import { BsChatTextFill } from 'react-icons/bs';
import { Button } from '@/ui/buttons/button';
import { HiMail, HiUser } from 'react-icons/hi';

export default function ContactForm() {
  const createContact = useCreateContact();
  let formReset: UseFormReturn<createContactInput>['reset'];

  const handleSubmit = (values: createContactInput) => {
    createContact.mutate(
      {
        data: values,
      },
      {
        onSuccess: () => {
          toast.success('Form submitted successfully');
          if (formReset) {
            formReset();
          }
        },
        onError: (error: any) => {
          const formError = formatErrors(error);
          toast.error(formError);
        },
      },
    );
  };
  return (
    <div className="my-12 w-full h-auto text-snow">
      <h1 className="text-lg font-bold">Get In touch</h1>
      <div className="mt-4 py-8 px-8 bg-evening-black rounded-xl text-sm">
        <Form
          className=""
          schema={contactFormSchema}
          onSubmit={handleSubmit}
          options={{
            defaultValues: {
              name: '',
              email: '',
              message: '',
            },
          }}
        >
          {({ register, formState, reset }) => {
            formReset = reset;
            return (
              <>
                <div>
                  <div className="userIcon mb-6">
                    <Input
                      id="icon"
                      icon={HiUser}
                      type="text"
                      placeholder="Name"
                      registration={register('name')}
                      error={formState.errors['name']}
                      className="pl-10"
                    />
                  </div>
                  <div className="mailIcon mb-6">
                    <Input
                      id="icon"
                      icon={HiMail}
                      type="text"
                      placeholder="Email"
                      registration={register('email')}
                      error={formState.errors['email']}
                      className="pl-10"
                    />
                  </div>
                  <div className="textIcon relative mb-6">
                    <div
                      id="icon"
                      className="absolute top-3 left-0 translate-y-1/2 flex items-center text-lg pl-3 pointer-events-none"
                    >
                      <BsChatTextFill />
                    </div>
                    <Textarea
                      placeholder="Message"
                      registration={register('message')}
                      error={formState.errors['message']}
                      className="pl-10"
                    />
                  </div>

                  <div className="my-4">
                    <Button className="bg-green hover:bg-green/60 uppercase transition rounded-xl text-midnight-black text-base font-medium px-8 py-2">
                      Send Message
                    </Button>
                  </div>
                </div>
              </>
            );
          }}
        </Form>
      </div>
    </div>
  );
}
