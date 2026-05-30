import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  budget?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firestore: Firestore) {}

  async sendContactMessage(data: ContactMessage): Promise<string> {
    try {
      const messageData = {
        ...data,
        timestamp: serverTimestamp(),
        status: 'nouveau',
        read: false
      };

      const contactsCollection = collection(this.firestore, 'contacts');
      const docRef = await addDoc(contactsCollection, messageData);
      
      console.log('✅ Message sauvegardé avec ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du message:', error);
      throw error;
    }
  }

  async sendQuoteRequest(data: any): Promise<string> {
    try {
      const quoteData = {
        ...data,
        timestamp: serverTimestamp(),
        status: 'nouveau',
        read: false
      };

      const quotesCollection = collection(this.firestore, 'quotes');
      const docRef = await addDoc(quotesCollection, quoteData);
      
      console.log('✅ Demande de devis sauvegardée avec ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du devis:', error);
      throw error;
    }
  }
}
