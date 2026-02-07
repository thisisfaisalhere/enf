'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { propertyRecommendations } from '@/ai/flows/property-recommendations-flow';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FormSchema = z.object({
  preferences: z.string().min(10, {
    message: 'Please describe your preferences in at least 10 characters.',
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export function AiRecommender() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      preferences: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);
    try {
      const result = await propertyRecommendations(data);
      setRecommendations(result.recommendations);
    } catch (e) {
      setError('An error occurred while getting recommendations. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-recommender" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
            <div className="inline-block bg-primary/10 text-primary p-3 rounded-full">
                <Wand2 className="w-8 h-8" />
            </div>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 tracking-tight">AI-Powered Recommendations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Describe your dream property, and let our AI find the perfect match from our exclusive portfolio.
          </p>
        </div>

        <Card className="mt-12 bg-background/50 border-border/20 shadow-glow">
          <CardHeader>
            <CardTitle>Find Your Perfect Home</CardTitle>
            <CardDescription>e.g., "A 3-bedroom apartment near the sea with a modern kitchen and a large balcony."</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="preferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Your Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you're looking for..."
                          className="resize-none"
                          rows={4}
                          {...field}
                          data-testid="ai-prefs-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={isLoading}
                  data-testid="ai-submit-button"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Get Recommendations'
                  )}
                </Button>
              </form>
            </Form>
            
            {(isLoading || recommendations.length > 0 || error) && (
                <div className="mt-8">
                    {isLoading && (
                        <div className="space-y-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-muted h-10 w-10"></div>
                                    <div className="flex-1 space-y-3 py-1">
                                        <div className="h-2 bg-muted rounded"></div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-muted rounded col-span-2"></div>
                                            <div className="h-2 bg-muted rounded col-span-1"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {error && <p className="text-destructive text-center">{error}</p>}
                    {recommendations.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-foreground">Our suggestions for you:</h3>
                            <ul className="space-y-3">
                                {recommendations.map((rec, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="p-4 bg-secondary/50 border border-border rounded-md text-secondary-foreground"
                                    >
                                        {rec}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
