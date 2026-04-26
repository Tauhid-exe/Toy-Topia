import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const { register, updateUserProfile } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) return 'Password must have at least one uppercase letter'
    if (!/[a-z]/.test(password)) return 'Password must have at least one lowercase letter'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validate password
    const passwordError = validatePassword(form.password)
    if (passwordError) {
      setError(passwordError)
      return
    }

    setLoading(true)
    try {
      // Create account
      await register(form.email, form.password)
      // Update name and photo
      await updateUserProfile(form.name, form.photoURL)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-8">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Create Account
        </h2>
        <p className="text-center text-base-content/50 text-sm mb-6">
          Join ToyTopia today!
        </p>

        {/* Error message */}
        {error && (
          <div className="alert alert-error mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="input input-bordered w-full"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="https://your-photo-url.com"
              className="input input-bordered w-full"
              value={form.photoURL}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Min 6 chars, upper & lowercase"
                className="input input-bordered w-full pr-12"
                value={form.password}
                onChange={handleChange}
                required
              />
              {/* Show/hide toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 text-sm"
              >
                {showPassword ? '🙈 Hide' : '👁️ Show'}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner" /> : 'Create Account'}
          </button>

        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-6 text-base-content/60">
          Already have an account?{' '}
          <Link to="/login" className="link link-primary font-semibold">
            Login here
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register