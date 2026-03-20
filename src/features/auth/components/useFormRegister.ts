import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import {
  registerSchema,
  type RegisterFormData,
} from '../schemas/register.schema'
import { ApiError } from '@/infra/http/api-error'
import { getCampuses, registerUser } from '../services/register.service'
import { useAuth } from '../contexts/AuthContext'

export function UseFormRegister() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [registerError, setRegisterError] = useState<string | null>(null)
  const [campuses, setCampuses] = useState<
    Array<{
      id: string
      name: string
    }>
  >([])

  const navigate = useNavigate()
  const {setAuthUser} = useAuth()

  useEffect(() => {
    async function fetchCampuses() {
      try {
        setRegisterError(null)

        const campuses = await getCampuses()
        setCampuses(campuses)
      } catch (error) {
        if (error instanceof ApiError) {
          setRegisterError(error.message)
        }
      }
    }

    fetchCampuses()
  }, [])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: RegisterFormData) => {
    const { course, ...rest } = data
    const payload = data.role === 'STUDENT' ? data : rest

    try {
      const responseData = await registerUser(payload)
      setAuthUser(responseData.user)
      navigate('/feed')
    } catch (error) {
      if (error instanceof ApiError) {
        setRegisterError(error.message)
      }
    }
  }
  return {
    state: {
      setShowPass,
      showPass,
      registerError,
      campuses,
    },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      control,
      isSubmitting,
      isValid,
      errors,
      watch,
    },
  }
}
