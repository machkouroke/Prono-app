#!/bin/bash

# Définir la structure des dossiers
folders=(
  "src/components/Coupon"
  "src/hooks"
  "src/types"
  "src/theme"
  "src/utils"
  "src/pages"
)

# Définir la liste des fichiers à créer
files=(
  "src/components/Coupon/CouponCard.tsx"
  "src/components/Coupon/CouponEvent.tsx"
  "src/components/Coupon/CouponCombined.tsx"
  "src/components/Coupon/styles.ts"
  "src/hooks/useCoupons.ts"
  "src/types/coupon.d.ts"
  "src/theme/index.ts"
  "src/utils/helpers.ts"
  "src/pages/Home.tsx"
)

# Créer les dossiers
for folder in "${folders[@]}"; do
  mkdir -p "$folder"
done

# Créer les fichiers vides
for file in "${files[@]}"; do
  touch "$file"
done

echo "✅ Projet structuré avec succès !"
