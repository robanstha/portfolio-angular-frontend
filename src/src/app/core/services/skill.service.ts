import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill, SkillCategory } from '../models/portfolio.models';

/**
 * SkillService
 * Manages skill data and skill categories
 */
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private readonly skillCategoriesSubject = new BehaviorSubject<SkillCategory[]>([
    {
      name: 'Frontend',
      skills: [
        { id: 'f1', name: 'Angular', level: 90, category: 'Frontend', icon: 'angular' },
        { id: 'f2', name: 'React', level: 85, category: 'Frontend', icon: 'react' },
        { id: 'f3', name: 'TypeScript', level: 90, category: 'Frontend', icon: 'typescript' },
        { id: 'f4', name: 'HTML/CSS', level: 95, category: 'Frontend', icon: 'html5' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { id: 'b1', name: 'Node.js', level: 85, category: 'Backend', icon: 'nodejs' },
        { id: 'b2', name: 'Python', level: 80, category: 'Backend', icon: 'python' },
        { id: 'b3', name: 'MongoDB', level: 75, category: 'Backend', icon: 'mongodb' },
        { id: 'b4', name: 'PostgreSQL', level: 70, category: 'Backend', icon: 'postgresql' }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { id: 'd1', name: 'Git', level: 90, category: 'DevOps & Tools', icon: 'git' },
        { id: 'd2', name: 'Docker', level: 75, category: 'DevOps & Tools', icon: 'docker' },
        { id: 'd3', name: 'AWS', level: 70, category: 'DevOps & Tools', icon: 'aws' },
        { id: 'd4', name: 'CI/CD', level: 80, category: 'DevOps & Tools', icon: 'cicd' }
      ]
    }
  ]);

  readonly skillCategories$ = this.skillCategoriesSubject.asObservable();

  constructor() {}

  /**
   * Get all skill categories
   */
  getSkillCategories(): Observable<SkillCategory[]> {
    return this.skillCategories$;
  }

  /**
   * Get skills by category name
   */
  getSkillsByCategory(categoryName: string): Observable<Skill[]> {
    return this.skillCategories$;
  }

  /**
   * Get all skills flattened
   */
  getAllSkills(): Observable<Skill[]> {
    return this.skillCategories$;
  }

  /**
   * Get skill by ID
   */
  getSkillById(id: string): Observable<Skill | undefined> {
    return this.skillCategories$;
  }

  /**
   * Update skill level
   */
  updateSkillLevel(skillId: string, newLevel: number): void {
    const categories = this.skillCategoriesSubject.value;
    const updated = categories.map(cat => ({
      ...cat,
      skills: cat.skills.map(skill =>
        skill.id === skillId ? { ...skill, level: newLevel } : skill
      )
    }));
    this.skillCategoriesSubject.next(updated);
  }

  /**
   * Add new skill
   */
  addSkill(skill: Skill): void {
    const categories = this.skillCategoriesSubject.value;
    const updated = categories.map(cat =>
      cat.name === skill.category
        ? { ...cat, skills: [...cat.skills, skill] }
        : cat
    );
    this.skillCategoriesSubject.next(updated);
  }
}
