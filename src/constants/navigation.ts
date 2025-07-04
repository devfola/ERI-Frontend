import { Building2, User, QrCode, Package, Shield, FileText, Upload, Eye, Gift, RotateCcw, Key, Home } from 'lucide-react';

export const MAIN_NAV_ITEMS = [
  { id: 'landing', label: 'Home', icon: Home },
  { id: 'manufacturer', label: 'Manufacturer', icon: Building2 },
  { id: 'user', label: 'User Dashboard', icon: User },
  { id: 'qr-scan', label: 'QR Scanner', icon: QrCode },
];

export const MANUFACTURER_FEATURES = [
  { id: 'register-manufacturer', label: 'Register', icon: Building2 },
  { id: 'create-certificate', label: 'Create Certificate', icon: FileText },
  { id: 'verify-authenticity', label: 'Verify Authenticity', icon: Eye },
  { id: 'bulk-upload', label: 'Bulk Upload', icon: Upload },
];

export const USER_FEATURES = [
  { id: 'register-user', label: 'Register', icon: User },
  { id: 'my-items', label: 'My Items', icon: Package },
  { id: 'transfer-ownership', label: 'Transfer', icon: Gift },
  { id: 'claim-ownership', label: 'Claim Ownership', icon: Package },
  { id: 'revoke-code', label: 'Revoke Code', icon: RotateCcw },
  { id: 'verify-ownership', label: 'Verify', icon: Shield },
];

export const QR_FEATURES = [
  { id: 'claim-ownership', label: 'Claim Ownership', icon: Package },
  { id: 'verify-ownership', label: 'Verify Ownership', icon: Shield },
  { id: 'verify-authenticity', label: 'Verify Authenticity', icon: Eye },
];