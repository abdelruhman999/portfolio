import { User, UserLevel, UserDepartment } from '@/types/user-roles';
import { Lead } from '@/features/leads/types/lead.types';
import { canReturnToMarketing } from './working-days';

// ============================================
// ROLE CHECKING UTILITIES
// ============================================

/**
 * Check if user is Owner
 */
export function isOwner(user: User): boolean {
  return user.level === 'owner';
}

/**
 * Check if user is Manager
 */
export function isManager(user: User): boolean {
  return user.level === 'manager';
}

/**
 * Check if user is Leader
 */
export function isLeader(user: User): boolean {
  return user.level === 'leader';
}

/**
 * Check if user is Senior
 */
export function isSenior(user: User): boolean {
  return user.level === 'senior';
}

/**
 * Check if user is Agent
 */
export function isAgent(user: User): boolean {
  return user.level === 'agent';
}

/**
 * Check if user is in Marketing department
 */
export function isMarketing(user: User): boolean {
  return user.department === 'marketing';
}

/**
 * Check if user is in Sales department
 */
export function isSales(user: User): boolean {
  return user.department === 'sales';
}

/**
 * Check if user is in Technical department
 */
export function isTechnical(user: User): boolean {
  return user.department === 'technical';
}

/**
 * Check if user is HR
 */
export function isHR(user: User): boolean {
  return user.department === 'hr';
}

/**
 * Check if user is Designer
 */
export function isDesigner(user: User): boolean {
  return user.department === 'design';
}

/**
 * Check if user is Office Agent
 */
export function isOffice(user: User): boolean {
  return user.department === 'office';
}

// ============================================
// PERMISSION CHECKING UTILITIES
// ============================================

/**
 * Check if user can assign leads to others
 * Only Leaders, Managers, and Owner can assign
 */
export function canAssignLeads(user: User): boolean {
  return isLeader(user) || isManager(user) || isOwner(user);
}

/**
 * Check if user can view all leads (not just assigned)
 * Only Managers and Owner can view all
 */
export function canViewAllLeads(user: User): boolean {
  return isManager(user) || isOwner(user);
}

/**
 * Check if user can view hidden leads
 * Only Managers and Owner can view hidden leads
 */
export function canViewHiddenLeads(user: User): boolean {
  return isManager(user) || isOwner(user);
}

/**
 * Check if user can create new leads
 * Only Marketing department can create leads
 */
export function canCreateLead(user: User): boolean {
  return isMarketing(user);
}

/**
 * Check if user can edit a specific lead
 * Marketing can edit their created leads
 * Sales can edit their assigned leads
 * Managers and Owner can edit any lead
 */
export function canEditLead(lead: Lead, user: User): boolean {
  if (isOwner(user) || isManager(user)) return true;
  if (lead.createdBy === user.id) return true;
  if (lead.assignedTo === user.id) return true;
  return false;
}

/**
 * Check if user can delete a lead
 * Only Managers and Owner can delete
 */
export function canDeleteLead(user: User): boolean {
  return isManager(user) || isOwner(user);
}

/**
 * Check if user can return a lead to marketing
 * Must be Sales, assigned to user, and within 5 working days
 */
export function canReturnLead(lead: Lead, user: User): boolean {
  // Must be Sales department
  if (!isSales(user)) return false;
  
  // Must be assigned to this user
  if (lead.assignedTo !== user.id) return false;
  
  // Cannot return if already returned once
  if (lead.returnCount >= 1) return false;
  
  // Check 5-day rule
  if (!lead.assignedAt) return false;
  return canReturnToMarketing(lead.assignedAt);
}

/**
 * Check if user can add recommendations
 * Only Sales and Technical can add recommendations
 */
export function canAddRecommendation(user: User): boolean {
  return isSales(user) || isTechnical(user);
}

/**
 * Check if user can create subscriptions
 * Only Sales can create subscriptions
 */
export function canCreateSubscription(user: User): boolean {
  return isSales(user);
}

/**
 * Check if user can add payments
 * Only Sales can add payments
 */
export function canAddPayment(user: User): boolean {
  return isSales(user);
}

/**
 * Check if user can view a specific lead
 */
export function canViewLead(lead: Lead, user: User): boolean {
  // Owner and Manager can view all
  if (isOwner(user) || isManager(user)) return true;
  
  // Can view if created by user
  if (lead.createdBy === user.id) return true;
  
  // Can view if assigned to user
  if (lead.assignedTo === user.id) return true;
  
  return false;
}

/**
 * Check if user can update lead status
 * Sales can update status of assigned leads
 * Marketing can update status of created leads
 * Managers and Owner can update any
 */
export function canUpdateLeadStatus(lead: Lead, user: User): boolean {
  if (isOwner(user) || isManager(user)) return true;
  if (lead.assignedTo === user.id && isSales(user)) return true;
  if (lead.createdBy === user.id && isMarketing(user)) return true;
  return false;
}

// ============================================
// LEAD FILTERING UTILITIES
// ============================================

/**
 * Get leads visible to a specific user based on their role
 */
export function getLeadsForUser(leads: Lead[], user: User): Lead[] {
  // Owner sees all leads
  if (isOwner(user)) {
    return leads.filter(l => !l.isDeleted);
  }
  
  // Manager sees all leads in their department
  if (isManager(user)) {
    return leads.filter(l => {
      if (l.isDeleted) return false;
      // For now, managers see all non-deleted leads
      // TODO: Add department filtering when user department tracking is implemented
      return true;
    });
  }
  
  // Agents and others see only their assigned or created leads
  return leads.filter(l => {
    if (l.isDeleted) return false;
    return l.assignedTo === user.id || l.createdBy === user.id;
  });
}

/**
 * Get hidden leads (only for Managers and Owner)
 */
export function getHiddenLeads(leads: Lead[], user: User): Lead[] {
  if (!canViewHiddenLeads(user)) return [];
  return leads.filter(l => l.isHide && !l.isDeleted);
}

/**
 * Filter leads by assignment status for current user
 */
export function getMyAssignedLeads(leads: Lead[], user: User): Lead[] {
  return leads.filter(l => 
    !l.isDeleted && 
    !l.isHide && 
    l.assignedTo === user.id
  );
}

/**
 * Filter leads created by current user
 */
export function getMyCreatedLeads(leads: Lead[], user: User): Lead[] {
  return leads.filter(l => 
    !l.isDeleted && 
    !l.isHide && 
    l.createdBy === user.id
  );
}

/**
 * Get leads that can be assigned (unassigned or returned)
 */
export function getAssignableLeads(leads: Lead[], user: User): Lead[] {
  if (!canAssignLeads(user)) return [];
  
  return leads.filter(l => 
    !l.isDeleted && 
    !l.isHide && 
    (!l.assignedTo || l.returnStatus === 'returned')
  );
}

// ============================================
// GENERAL PERMISSION HELPER
// ============================================

/**
 * Check if user has a specific permission
 * Centralized permission checker
 */
export function hasPermission(
  user: User,
  permission: 'assign' | 'create' | 'edit' | 'delete' | 'view_all' | 'view_hidden' | 'return' | 'add_recommendation' | 'create_subscription' | 'add_payment',
  lead?: Lead
): boolean {
  switch (permission) {
    case 'assign':
      return canAssignLeads(user);
    case 'create':
      return canCreateLead(user);
    case 'edit':
      return lead ? canEditLead(lead, user) : false;
    case 'delete':
      return canDeleteLead(user);
    case 'view_all':
      return canViewAllLeads(user);
    case 'view_hidden':
      return canViewHiddenLeads(user);
    case 'return':
      return lead ? canReturnLead(lead, user) : false;
    case 'add_recommendation':
      return canAddRecommendation(user);
    case 'create_subscription':
      return canCreateSubscription(user);
    case 'add_payment':
      return canAddPayment(user);
    default:
      return false;
  }
}
