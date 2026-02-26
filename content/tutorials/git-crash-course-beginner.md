---
title: "Git Crash Course: From Absolute Beginner to Confident User"
date: "2025-10-15"
excerpt: "A complete, hands-on guide to version control that actually makes sense."
category: "Tutorial"
tags: ["devops", "git", "github", "versioning"]
featured: true
level: "Beginner"
author: "Merveille Alexander"
readTime: "15 min read"
---

# Git Crash Course: From Absolute Beginner to Confident User

*A complete, hands-on guide to version control that actually makes sense*

---

## Before We Begin: Why Git Matters

I'll never forget my first week as a junior developer. I'd been working on a feature for three days when my computer crashed. The file corrupted. Three days of work, gone forever. I literally cried at my desk.

My senior dev walked over, looked at my screen, and said something I'll never forget: "You didn't use Git?"

That night, I learned Git. I've never lost work since.

**Git is a time machine for your code.** It lets you:
- Travel back to any previous version of your project
- Work on multiple features simultaneously without them interfering
- Collaborate with others without accidentally overwriting their work
- Experiment freely, knowing you can always undo

This tutorial will take you from "Git? Isn't that a type of fruit?" to confidently using Git in your daily workflow.

**What you'll learn:**
- Core concepts explained simply
- Step-by-step commands with real examples
- Daily workflows you'll actually use
- How to fix mistakes (because you will make them)

**Prerequisites:**
- A computer (Mac, Windows, or Linux)
- Ability to open a terminal/command prompt
- A text editor

**Time to complete:** About 1-2 hours

Let's start your Git journey.

---

## Part 1: What Is Version Control? (The Mental Model)

### The Problem Git Solves

Imagine you're writing an essay. You might do this:

```
essay_final.docx
essay_final2.docx
essay_final_really_final.docx
essay_final_OMG_this_time_for_real.docx
```

We've all been there. This is **manual version control**, and it's terrible.

Git solves this by tracking every change automatically. Think of it as:

- **A snapshot machine** — Every time you save, Git takes a picture of your entire project
- **A time machine** — You can go back to any snapshot
- **A parallel universe generator** — Create alternate timelines to try ideas safely

### The Three States of Git

Everything in Git exists in one of three states:

```
Working Directory → Staging Area → Repository
     (your files)     (ready to save)   (saved forever)
```

Think of it like preparing a photo album:
1. **Working Directory** — You take photos (make changes to files)
2. **Staging Area** — You select which photos to put in the album (choose what to save)
3. **Repository** — You paste them in the album permanently (commit)

Let's see this in action.

---

## Part 2: Installing and Configuring Git

### Step 1: Install Git

**Mac:**
```bash
# Using Homebrew (recommended)
brew install git

# Or download from git-scm.com
```

**Windows:**
Download from [git-scm.com](https://git-scm.com) and run the installer. Choose "Git Bash" during installation—it gives you a Linux-like terminal.

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

### Step 2: Verify Installation

```bash
git --version
```

You should see something like `git version 2.40.0`.

### Step 3: Configure Your Identity

Git needs to know who you are. This information gets attached to every save:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Set Your Default Editor

```bash
# For VS Code users
git config --global core.editor "code --wait"

# For Nano (simpler for beginners)
git config --global core.editor "nano"

# For Vim (if you're brave)
git config --global core.editor "vim"
```

### Step 5: Check Your Configuration

```bash
git config --list
```

You should see your name, email, and editor settings.

---

## Part 3: Your First Git Repository

A **repository** (or "repo") is simply a folder that Git is watching. Let's create one.

### Step 1: Create a Project

```bash
# Create a new folder
mkdir my-first-git-project
cd my-first-git-project

# Create a file
echo "# My First Git Project" > README.md
```

### Step 2: Initialize Git

```bash
git init
```

You'll see: `Initialized empty Git repository in /path/to/my-first-git-project/.git/`

Git created a hidden `.git` folder. This is Git's brain—it stores all the history. Never touch this folder directly.

### Step 3: Check Your Status

```bash
git status
```

You'll see:
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present
```

This is your most important command. `git status` tells you exactly what's happening.

### Step 4: Stage Your File

```bash
git add README.md
```

Now run `git status` again:

```
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

The file has moved from "Working Directory" to "Staging Area".

### Step 5: Commit Your File

```bash
git commit -m "Initial commit: add README"
```

You'll see:
```
[main (root-commit) abc1234] Initial commit: add README
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

Congratulations! You've made your first commit. Your file is now safely in Git's repository.

---

## Part 4: The Core Workflow You'll Use Every Day

Now that you've made one commit, let's learn the daily rhythm of Git.

### The Basic Cycle

Every time you work on your project, you'll repeat this cycle:

```
1. Make changes → 2. Stage changes → 3. Commit changes
```

### Step 1: Make Some Changes

Open `README.md` and add more content:

```markdown
# My First Git Project

This is my first project using Git for version control.

## What I've Learned
- How to initialize a repository
- How to stage files
- How to make commits
```

### Step 2: Check What Changed

```bash
git status
```

You'll see:
```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   README.md
```

### Step 3: See the Actual Changes

```bash
git diff
```

This shows exactly what changed:
```diff
diff --git a/README.md b/README.md
index abc1234..def5678 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,7 @@
 # My First Git Project
+
+This is my first project using Git for version control.
+
+## What I've Learned
+- How to initialize a repository
+- How to stage files
+- How to make commits
```

The green lines with `+` are additions. (Red lines with `-` would be deletions.)

### Step 4: Stage and Commit

```bash
git add README.md
git commit -m "Add description and learning notes"
```

### The Shortcut: Skip Staging

If you want to commit all changes to tracked files without staging:

```bash
git commit -a -m "Commit all changes to tracked files"
```

The `-a` flag stages and commits in one step. But be careful—it won't include new files (untracked files).

---

## Part 5: Viewing History – Your Time Machine

### Step 1: See Your Commit History

```bash
git log
```

You'll see something like:
```
commit def5678 (HEAD -> main)
Author: Your Name <your.email@example.com>
Date:   Mon May 17 10:30:45 2026 -0400

    Add description and learning notes

commit abc1234
Author: Your Name <your.email@example.com>
Date:   Mon May 17 10:15:22 2026 -0400

    Initial commit: add README
```

### Step 2: See a Compact History

```bash
git log --oneline
```

```
def5678 (HEAD -> main) Add description and learning notes
abc1234 Initial commit: add README
```

The first 7 characters (def5678, abc1234) are commit IDs—unique identifiers for each commit.

### Step 3: See a Graph of Branches

```bash
git log --oneline --graph --all
```

This shows branches visually. We'll cover branches soon.

### Step 4: See Who Changed What

```bash
git blame README.md
```

This shows who last modified each line—incredibly useful when you need to ask someone about code they wrote.

---

## Part 6: Undoing Things – Your Safety Net

Everyone makes mistakes. Git gives you multiple ways to undo.

### Scenario 1: You Staged the Wrong File

```bash
git add wrong-file.txt  # Oops, didn't mean to add this
git status  # Shows it's staged
git restore --staged wrong-file.txt  # Unstage it
git status  # Now it's unstaged (changes still exist)
```

### Scenario 2: You Want to Discard Changes to a File

```bash
# You made changes but want to go back to last commit
git restore wrong-file.txt
```

**Warning:** This permanently discards uncommitted changes. Use with caution!

### Scenario 3: You Committed Too Early (Forgot a File)

```bash
git add forgotten-file.txt
git commit --amend -m "Add forgotten file to previous commit"
```

This adds the file to the previous commit instead of creating a new one. Perfect for when you forget something small.

### Scenario 4: You Want to Undo a Commit but Keep Changes

```bash
git reset --soft HEAD~1
```

This undoes the last commit but keeps your changes staged. The `HEAD~1` means "go back one commit."

### Scenario 5: You Want to Completely Undo a Commit

```bash
git reset --hard HEAD~1
```

**DANGER ZONE:** This completely removes the last commit AND all its changes. They're gone forever. Use only if you're absolutely sure.

### Scenario 6: You Want to Revert a Commit (Safest)

```bash
git revert def5678
```

This creates a *new* commit that undoes the changes from commit `def5678`. Safer than `reset` because it doesn't rewrite history.

---

## Part 7: Branching – Working in Parallel Universes

Branches are Git's superpower. They let you work on multiple things simultaneously without them interfering.

### The Mental Model

Think of branches as alternate timelines:

- **main** — The official, stable timeline
- **feature-login** — A parallel universe where you build login
- **bugfix-header** — Another universe where you fix the header

When you're done, you merge these timelines back together.

### Step 1: Create a Branch

```bash
# Create a new branch called "feature/add-contact-page"
git branch feature/add-contact-page
```

### Step 2: Switch to Your Branch

```bash
git checkout feature/add-contact-page
# Or in modern Git:
git switch feature/add-contact-page
```

### Step 3: Create and Switch in One Command

```bash
git checkout -b feature/add-about-page
# Or:
git switch -c feature/add-about-page
```

### Step 4: See All Branches

```bash
git branch
```

The `*` shows your current branch:
```
  feature/add-contact-page
* feature/add-about-page
  main
```

### Step 5: Work on Your Branch

Create a new file:

```bash
echo "# About Us" > about.md
git add about.md
git commit -m "Add about page"
```

This commit exists ONLY on your branch. Switch back to main and you won't see it.

### Step 6: Switch Back to Main

```bash
git checkout main
# Or:
git switch main
```

Look for `about.md`—it's not there! Each branch has its own timeline.

---

## Part 8: Merging – Bringing It All Together

When your feature is done, you merge it back into main.

### Step 1: Make Sure You're on the Destination Branch

```bash
git checkout main
# Or:
git switch main
```

### Step 2: Merge Your Feature

```bash
git merge feature/add-about-page
```

You'll see:
```
Updating abc1234..def5678
Fast-forward
 about.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 about.md
```

### Step 3: Delete the Feature Branch (Optional)

```bash
git branch -d feature/add-about-page
```

The branch is gone, but its commits are now part of main.

---

## Part 9: Merge Conflicts – When Parallel Universes Collide

Sometimes two branches modify the same part of the same file. Git doesn't know which change to keep—that's a **merge conflict**.

### Step 1: Create a Conflict (On Purpose)

Let's create a situation where conflicts happen:

```bash
# On main branch
echo "Line 1: Hello" > conflict.txt
git add conflict.txt
git commit -m "Add conflict.txt on main"

# Create and switch to a new branch
git checkout -b test-branch
echo "Line 1: Hola" > conflict.txt  # Change same line
git add conflict.txt
git commit -m "Change conflict.txt on branch"

# Switch back to main
git checkout main
echo "Line 1: Bonjour" > conflict.txt  # Change same line differently
git add conflict.txt
git commit -m "Change conflict.txt on main"
```

### Step 2: Try to Merge

```bash
git merge test-branch
```

You'll see:
```
Auto-merging conflict.txt
CONFLICT (content): Merge conflict in conflict.txt
Automatic merge failed; fix conflicts and then commit the result.
```

### Step 3: Look at the Conflicted File

Open `conflict.txt`:

```
<<<<<<< HEAD
Line 1: Bonjour
=======
Line 1: Hola
>>>>>>> test-branch
```

- `<<<<<<< HEAD` to `=======` is your current branch's version
- `=======` to `>>>>>>> test-branch` is the incoming branch's version

### Step 4: Resolve the Conflict

Edit the file to what you want. For example:

```
Line 1: Hello World! (We decided to change it)
```

### Step 5: Mark as Resolved

```bash
git add conflict.txt
git commit -m "Resolve merge conflict in conflict.txt"
```

The merge is complete!

---

## Part 10: Working with Remote Repositories (GitHub)

Local Git is great, but the real magic happens when you collaborate using platforms like GitHub, GitLab, or Bitbucket.

### Step 1: Create a Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it "my-first-git-project"
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Connect Your Local Repo to GitHub

GitHub will show you commands. Run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/my-first-git-project.git
```

This tells Git: "There's a remote repository called 'origin' at this URL."

### Step 3: Push Your Code to GitHub

```bash
git push -u origin main
```

The `-u` sets up tracking so future pushes can just use `git push`.

### Step 4: Check GitHub

Refresh your GitHub page. Your code is now online!

### Step 5: Pull Changes from GitHub

If someone else pushes changes, or you work on another computer:

```bash
git pull origin main
```

This downloads and merges changes from GitHub.

---

## Part 11: The Daily Developer Workflow

Here's what your actual day-to-day workflow looks like:

### Morning: Start Fresh

```bash
git checkout main
git pull origin main
```

### Work on a New Feature

```bash
git checkout -b feature/awesome-thing
# Write code...
git add .
git commit -m "Add awesome feature part 1"
# Write more code...
git add .
git commit -m "Finish awesome feature"
```

### Update Your Branch with Latest Changes

```bash
git checkout main
git pull origin main
git checkout feature/awesome-thing
git merge main
# Fix any conflicts
```

### Push and Create Pull Request

```bash
git push origin feature/awesome-thing
```

Then on GitHub, create a Pull Request for your feature.

---

## Part 12: Handy Shortcuts and Aliases

Git has many shortcuts that save time:

### Staging Shortcuts

```bash
# Stage all changes (including new files)
git add -A

# Stage all changes in current directory
git add .

# Interactive staging (choose what to stage)
git add -p
```

### Commit Shortcuts

```bash
# Amend last commit (if you forgot something small)
git commit --amend

# Commit with a shorter message flag
git commit -m "Message"
```

### Log Shortcuts

```bash
# One-line log
git log --oneline

# Graph view
git log --graph --oneline --all

# Last 3 commits
git log -3

# Search commits by message
git log --grep="bug fix"
```

### Create Aliases (Even Shorter!)

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.hist "log --oneline --graph --all"
```

Now you can use:
```bash
git st        # Instead of git status
git co main   # Instead of git checkout main
git hist      # Pretty history view
```

---

## Part 13: The .gitignore File – What Not to Save

Some files should NEVER be in Git:
- Passwords and secrets
- Environment variables
- Build outputs (like `node_modules`)
- Temporary files
- IDE settings

### Step 1: Create .gitignore

```bash
touch .gitignore
```

### Step 2: Add Patterns to Ignore

Edit `.gitignore`:

```
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.exe
*.dll

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

### Step 3: Add and Commit

```bash
git add .gitignore
git commit -m "Add .gitignore"
```

Git will now ignore all those files automatically.

---

## Part 14: Fixing Common Mistakes

### Mistake 1: Committed to the Wrong Branch

```bash
# You committed to main but meant to commit to feature
git checkout -b feature-branch  # Creates branch at current commit
git checkout main
git reset --hard HEAD~1  # Remove commit from main
```

### Mistake 2: Need to Undo a Merge

```bash
# If you haven't pushed yet
git reset --hard ORIG_HEAD

# ORIG_HEAD is Git's backup of where you were before the merge
```

### Mistake 3: Committed with Wrong Message

```bash
git commit --amend -m "Correct message"
```

### Mistake 4: Accidentally Deleted a File

```bash
# Restore a deleted file from the last commit
git restore deleted-file.txt

# Or from a specific commit
git restore --source=abc1234 deleted-file.txt
```

### Mistake 5: Need to See What Changed in a Commit

```bash
git show abc1234
```

---

## Part 15: A Complete Real-World Example

Let's walk through a realistic feature development cycle:

```bash
# Start fresh
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/user-authentication

# Create new files
mkdir -p src/components
touch src/components/LoginForm.js
touch src/components/RegisterForm.js

# Stage and commit
git add src/components/LoginForm.js
git commit -m "Add login form component"

git add src/components/RegisterForm.js
git commit -m "Add registration form component"

# Oops, forgot to add styles
touch src/components/LoginForm.css
git add src/components/LoginForm.css
git commit --amend --no-edit  # Add to previous commit

# Meanwhile, main has been updated. Get those changes.
git checkout main
git pull origin main
git checkout feature/user-authentication
git merge main

# Fix any conflicts, then continue
# Add authentication logic
touch src/utils/auth.js
git add src/utils/auth.js
git commit -m "Add authentication utility functions"

# Push and create pull request
git push origin feature/user-authentication
```

---

## Part 16: Git Cheat Sheet (Keep This Handy)

### Getting Started
```bash
git init                    # Create new repo
git clone <url>             # Copy existing repo
git config --global user.name "Name"  # Set identity
```

### Daily Work
```bash
git status                  # What's happening?
git add <file>              # Stage file
git add .                   # Stage all
git commit -m "message"     # Commit staged
git commit -a -m "message"  # Stage+commit tracked files
git pull                    # Get latest changes
git push                    # Send your changes
```

### Branches
```bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git checkout -b <name>      # Create and switch
git merge <name>            # Merge branch into current
git branch -d <name>        # Delete branch
```

### History and Diff
```bash
git log                     # Show history
git log --oneline           # Compact history
git diff                    # Show unstaged changes
git diff --staged          # Show staged changes
git show <commit>           # Show commit details
```

### Undoing
```bash
git restore <file>          # Discard changes
git restore --staged <file> # Unstage
git reset --soft HEAD~1     # Undo commit, keep changes
git reset --hard HEAD~1     # Undo commit, discard changes
git revert <commit>         # Create undo commit
```

### Remote
```bash
git remote -v               # Show remotes
git remote add origin <url> # Add remote
git push -u origin main     # First push
git pull origin main        # Get changes
```

---

## What You've Learned

Congratulations! You now know enough Git to be productive. Let's review:

### Core Concepts
- [ ] Git tracks snapshots, not differences
- [ ] Three states: Working → Staged → Committed
- [ ] Commits are permanent snapshots with messages

### Essential Commands
- [ ] `git init` — Create repository
- [ ] `git add` — Stage changes
- [ ] `git commit` — Save permanently
- [ ] `git status` — Check what's happening
- [ ] `git log` — View history
- [ ] `git diff` — See changes

### Branching
- [ ] Branches are parallel universes
- [ ] `git branch` to create/ list
- [ ] `git checkout` to switch
- [ ] `git merge` to combine

### Collaboration
- [ ] `git push` to share
- [ ] `git pull` to get updates
- [ ] `git clone` to copy a repo

### Safety
- [ ] How to undo mistakes
- [ ] How to resolve conflicts
- [ ] When to use `.gitignore`

---

## Next Steps

You've mastered the basics. Here's what to learn next:

1. **Interactive Rebase** — Clean up commit history before sharing
2. **Cherry-picking** — Apply specific commits to other branches
3. **Stashing** — Temporarily save uncommitted work
4. **Git Hooks** — Automate tasks with scripts
5. **Git Flow** — A branching strategy for teams
6. **Forking Workflow** — Contributing to open source

---

## Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [Oh Shit, Git!](https://ohshitgit.com) — When things go wrong
- [Learn Git Branching](https://learngitbranching.js.org) — Interactive tutorial
- [GitHub Skills](https://skills.github.com) — Free courses

---

## Final Words of Wisdom

From someone who's used Git for over a decade:

**You will make mistakes.** Everyone does. The beauty of Git is that almost nothing is permanent. There's almost always a way to recover.

**Commit often.** A commit is a save point. Save early, save often. I commit every time I complete a small logical piece of work.

**Write good commit messages.** Future you will thank present you. A good message explains *why*, not just *what*.

**Branch freely.** Branches are cheap and easy. Create them for everything—features, bug fixes, experiments.

**Pull before you push.** Always get the latest changes before pushing your own. It avoids conflicts.

**Git is a tool, not a religion.** Use what works for you and your team. The "right" way is whatever keeps your code safe and your team happy.

---

That junior developer who cried over lost code? That was me. I've never lost code since learning Git. Now you won't either.

*Enjoyed this tutorial? I write about development tools and workflows every Month. Follow me on X [@themarvelbiz](https://x.com/@themarvelbiz) . And if you have a Git horror story, we've all been there!*

---
