import { ObjectId } from 'mongodb';

export interface GradeHistory {
  id?: ObjectId;
  student_id: number;  // Integer student ID
  class_id: number;    // Integer class ID
  scores: Score[];     // Array of scores
}

interface Score {
  type: 'exam' | 'quiz' | 'homework';  
  score: number;  
}
