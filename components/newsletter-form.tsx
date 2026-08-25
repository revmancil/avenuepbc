
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    if (!email) {
      toast?.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response?.ok) {
        toast?.success('Successfully subscribed to our newsletter!');
        setEmail('');
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Failed to subscribe');
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast?.error(error?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e?.target?.value || '')}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
          disabled={isSubmitting}
        />
        <Button 
          type="submit"
          className="bg-yellow-400 text-[#800000] hover:bg-yellow-300 px-6 py-3 font-semibold whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
