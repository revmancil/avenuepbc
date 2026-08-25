
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const NewMemberForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    inquiryType: 'membership',
    previousChurch: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target || {};
    setFormData(prev => ({
      ...prev,
      [name || '']: value || ''
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value || 'membership'
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    if (!formData?.firstName || !formData?.lastName || !formData?.email) {
      toast?.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/member-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        toast?.success('Information request submitted successfully! We\'ll contact you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          inquiryType: 'membership',
          previousChurch: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Member inquiry error:', error);
      toast?.error('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData?.firstName || ''}
                onChange={handleInputChange}
                className="form-input pl-4"
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData?.lastName || ''}
                onChange={handleInputChange}
                className="form-input pl-4"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData?.email || ''}
                onChange={handleInputChange}
                className="form-input pl-4"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData?.phone || ''}
                onChange={handleInputChange}
                className="form-input pl-4"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address
            </label>
            <Input
              id="address"
              name="address"
              type="text"
              value={formData?.address || ''}
              onChange={handleInputChange}
              className="form-input pl-4"
              placeholder="Enter your address"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="inquiryType" className="text-sm font-medium text-gray-700">
              I'm Interested In
            </label>
            <Select value={formData?.inquiryType || 'membership'} onValueChange={handleSelectChange}>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="membership">Church Membership</SelectItem>
                <SelectItem value="visit">Visiting the Church</SelectItem>
                <SelectItem value="baptism">Baptism</SelectItem>
                <SelectItem value="counseling">Pastoral Counseling</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="previousChurch" className="text-sm font-medium text-gray-700">
              Previous Church (Optional)
            </label>
            <Input
              id="previousChurch"
              name="previousChurch"
              type="text"
              value={formData?.previousChurch || ''}
              onChange={handleInputChange}
              className="form-input pl-4"
              placeholder="Name of your previous church"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData?.message || ''}
              onChange={handleInputChange}
              rows={4}
              className="form-input resize-none pl-4"
              placeholder="Tell us more about yourself or any questions you have..."
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full btn-church text-lg py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2" size={20} />
                Submit Information Request
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Your privacy is important to us</p>
              <p>We'll only use your information to contact you about your inquiry and church updates. You can unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewMemberForm;
