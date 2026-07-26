import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://YOUR_SUPABASE_PROJECT_URL.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const signInTab = document.getElementById('signInTab')
const signUpTab = document.getElementById('signUpTab')
const authForm = document.getElementById('authForm')
const submitButton = document.getElementById('submitButton')
const authMessage = document.getElementById('authMessage')
const githubButton = document.getElementById('githubButton')
const googleButton = document.getElementById('googleButton')

let isSignIn = true

function updateMode() {
  isSignIn = signInTab.classList.contains('active')
  submitButton.textContent = isSignIn ? 'Sign In' : 'Register'
  authMessage.textContent = ''
}

function setActiveTab(tab) {
  signInTab.classList.toggle('active', tab === 'signin')
  signUpTab.classList.toggle('active', tab === 'signup')
  updateMode()
}

signInTab.addEventListener('click', () => setActiveTab('signin'))
signUpTab.addEventListener('click', () => setActiveTab('signup'))

async function signInWithProvider(provider) {
  const { error } = await supabase.auth.signInWithOAuth({ provider })
  if (error) {
    authMessage.textContent = error.message
  }
}

authForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  authMessage.textContent = ''

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value

  if (isSignIn) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    authMessage.textContent = error ? error.message : 'Sign-in successful. Redirecting...'
  } else {
    const { data, error } = await supabase.auth.signUp({ email, password })
    authMessage.textContent = error ? error.message : `Check ${data.user?.email} for confirmation email.`
  }
})

githubButton.addEventListener('click', () => signInWithProvider('github'))
googleButton.addEventListener('click', () => signInWithProvider('google'))
