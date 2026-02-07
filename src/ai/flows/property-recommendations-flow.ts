'use server';
/**
 * @fileOverview Provides AI-powered property recommendations based on user preferences.
 *
 * - propertyRecommendations - A function that takes user preferences and returns property recommendations.
 * - PropertyRecommendationsInput - The input type for the propertyRecommendations function.
 * - PropertyRecommendationsOutput - The return type for the propertyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PropertyRecommendationsInputSchema = z.object({
  preferences: z
    .string()
    .describe('The user preferences for property recommendations.'),
});
export type PropertyRecommendationsInput = z.infer<typeof PropertyRecommendationsInputSchema>;

const PropertyRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of recommended properties.'),
});
export type PropertyRecommendationsOutput = z.infer<typeof PropertyRecommendationsOutputSchema>;

export async function propertyRecommendations(input: PropertyRecommendationsInput): Promise<PropertyRecommendationsOutput> {
  return propertyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'propertyRecommendationsPrompt',
  input: {schema: PropertyRecommendationsInputSchema},
  output: {schema: PropertyRecommendationsOutputSchema},
  prompt: `You are an AI expert in recommending properties based on user preferences.

  Based on the user preferences, recommend a list of properties that match their needs.

  User Preferences: {{{preferences}}}
  `,
});

const propertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'propertyRecommendationsFlow',
    inputSchema: PropertyRecommendationsInputSchema,
    outputSchema: PropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
