# GitHub Commands Guide - MS-CIT Learning Portal

## 🚀 Initial Setup (First Time)

### 1. Initialize Git Repository
```bash
# Navigate to project folder
cd "c:\Users\Anand Kamble\Desktop\shree class"

# Initialize git repository
git init

# Check git status
git status
```

### 2. Configure Git (If not already done)
```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
```

### 3. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name: `mscit-learning-portal` (or your preferred name)
4. Description: "MS-CIT Learning Portal - LMS System"
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### 4. Add Remote and Push
```bash
# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Or using SSH (if you have SSH keys set up)
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Verify remote
git remote -v
```

---

## 📝 Basic Git Commands

### Check Status
```bash
# See what files are changed/untracked
git status

# Short status
git status -s
```

### Add Files
```bash
# Add all files
git add .

# Add specific file
git add filename.js

# Add all files in a folder
git add client/
git add server/

# Add multiple specific files
git add file1.js file2.js
```

### Commit Changes
```bash
# Commit with message
git commit -m "Initial commit: MS-CIT Learning Portal"

# Commit with detailed message
git commit -m "Add batch management feature
- Created Batch model
- Added batch assignment functionality
- Updated admin dashboard UI"

# Commit all changes (skip staging)
git commit -am "Quick commit message"
```

### Push to GitHub
```bash
# Push to main branch (first time)
git push -u origin main

# Push to main branch (subsequent times)
git push origin main

# Push to specific branch
git push origin branch-name

# Force push (use with caution!)
git push -f origin main
```

---

## 🌿 Branch Management

### Create and Switch Branches
```bash
# Create new branch
git branch feature-batch-management

# Switch to branch
git checkout feature-batch-management

# Create and switch in one command
git checkout -b feature-batch-management

# List all branches
git branch

# List all branches (including remote)
git branch -a

# Delete branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

### Merge Branches
```bash
# Switch to main branch
git checkout main

# Merge feature branch into main
git merge feature-batch-management

# Merge with commit message
git merge feature-batch-management -m "Merge batch management feature"
```

---

## 📋 Complete Workflow Example

### First Time Setup
```bash
# 1. Navigate to project
cd "c:\Users\Anand Kamble\Desktop\shree class"

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. First commit
git commit -m "Initial commit: MS-CIT Learning Portal project"

# 5. Add remote (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/mscit-portal.git

# 6. Push to GitHub
git push -u origin main
```

### Daily Workflow
```bash
# 1. Check what changed
git status

# 2. See changes in files
git diff

# 3. Add changes
git add .

# 4. Commit changes
git commit -m "Description of changes"

# 5. Push to GitHub
git push origin main
```

---

## 🔄 Common Workflows

### Update from GitHub
```bash
# Fetch latest changes
git fetch origin

# Pull latest changes
git pull origin main

# Pull and merge
git pull
```

### Undo Changes
```bash
# Undo changes in working directory (before staging)
git checkout -- filename.js

# Unstage file (keep changes)
git reset HEAD filename.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard all local changes
git reset --hard origin/main
```

### View History
```bash
# View commit history
git log

# View short history
git log --oneline

# View history with graph
git log --oneline --graph --all

# View changes in a file
git log -p filename.js
```

---

## 🏷️ Tagging Releases

### Create Tags
```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags to GitHub
git push origin v1.0.0

# Push all tags
git push origin --tags
```

### List Tags
```bash
# List all tags
git tag

# List tags with messages
git tag -n
```

---

## 🔍 Useful Commands

### Check Differences
```bash
# See what changed
git diff

# See staged changes
git diff --staged

# Compare branches
git diff main..feature-branch

# Compare with remote
git diff origin/main
```

### Stash Changes
```bash
# Save changes temporarily
git stash

# List stashes
git stash list

# Apply stash
git stash apply

# Apply and remove stash
git stash pop

# Delete stash
git stash drop
```

### Remote Management
```bash
# View remotes
git remote -v

# Change remote URL
git remote set-url origin NEW_URL

# Remove remote
git remote remove origin

# Fetch from remote
git fetch origin
```

---

## 📦 Project-Specific Commands

### For This Project Structure

```bash
# Add only backend files
git add server/

# Add only frontend files
git add client/

# Add configuration files
git add .gitignore .env.example

# Commit backend changes
git add server/
git commit -m "Backend: Add batch management API"

# Commit frontend changes
git add client/
git commit -m "Frontend: Update admin dashboard UI"

# Commit documentation
git add *.md
git commit -m "Docs: Update deployment guide"
```

---

## 🚨 Important Notes

### Before First Push
1. ✅ Make sure `.env` files are in `.gitignore`
2. ✅ Check `.gitignore` includes `node_modules/`
3. ✅ Don't commit sensitive data (passwords, API keys)
4. ✅ Use `.env.example` files for templates

### Security Checklist
```bash
# Check what will be committed
git status

# Review changes before committing
git diff

# Verify .gitignore is working
git status --ignored
```

---

## 🎯 Quick Reference

### Most Used Commands
```bash
git status              # Check status
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push origin main    # Push to GitHub
git pull origin main    # Pull from GitHub
git log --oneline       # View history
git branch              # List branches
git checkout -b name    # Create new branch
```

### Emergency Commands
```bash
# Discard all local changes
git reset --hard HEAD

# Reset to remote version
git fetch origin
git reset --hard origin/main

# Remove untracked files
git clean -fd
```

---

## 📝 Commit Message Best Practices

### Good Commit Messages
```
✅ "Add batch management feature"
✅ "Fix CORS configuration for deployment"
✅ "Update admin dashboard UI with batch cards"
✅ "Fix: Resolve image upload issue"
```

### Bad Commit Messages
```
❌ "update"
❌ "fix"
❌ "changes"
❌ "asdf"
```

### Commit Message Format
```
Type: Brief description

Detailed explanation if needed
- Bullet point 1
- Bullet point 2
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 🔗 GitHub Repository Setup

### After Creating Repository on GitHub

```bash
# If repository already exists locally
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# If starting fresh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

## 🆘 Troubleshooting

### Authentication Issues
```bash
# If push fails with authentication error
# Option 1: Use Personal Access Token
# Generate token at: GitHub Settings > Developer settings > Personal access tokens

# Option 2: Use SSH keys
# Generate SSH key: ssh-keygen -t ed25519 -C "your_email@example.com"
# Add to GitHub: Settings > SSH and GPG keys
```

### Merge Conflicts
```bash
# If conflicts occur
git status                    # See conflicted files
# Edit files to resolve conflicts
git add .                     # Mark as resolved
git commit -m "Resolve merge conflicts"
```

### Large Files Issue
```bash
# If you accidentally committed large files
git rm --cached large-file.zip
git commit -m "Remove large file"
# Add to .gitignore
echo "large-file.zip" >> .gitignore
git add .gitignore
git commit -m "Add large file to gitignore"
```

---

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Ready to push your project! 🚀**
