"use server";

import { generatePersonalizedMessage, GeneratePersonalizedMessageInput } from "@/ai/flows/generate-personalized-message";

export async function getAIMessage(input: GeneratePersonalizedMessageInput) {
    try {
        const result = await generatePersonalizedMessage(input);
        return { message: result.message };
    } catch (error) {
        console.error("AI message generation failed:", error);
        return { error: "I'm at a loss for words, but my love for you is endless. Happy special day!" };
    }
}
