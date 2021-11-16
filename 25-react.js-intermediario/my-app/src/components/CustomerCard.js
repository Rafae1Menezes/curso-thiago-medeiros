import { useState } from 'react'

import {
   Card,
   CardHeader,
   CardActions,
   Avatar,
   IconButton,
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles(theme => ({
   root: {
      maxWidth: 345,
   },
}))

const CustomerCard = ({ name, lastName, email, avatar, className }) => {
   const classes = useStyles()

	const [openModal, setOpenModal] = useState(false)

   const handleToggleOpenModal = () => {
      setOpenModal(!openModal)
   }

   const handleConfirmModal = () => {
      alert('foi')
   }

	const handleRemoveCustomer = () => {
		handleToggleOpenModal()
	}

   return (
		<>
			<Card className={classNames(className, classes.root)}>
				<CardHeader
					avatar={
						<Avatar
							aria-label="recipe"
							src={avatar}
							sx={{ width: 56, height: 56 }}
						/>
					}
					title={`${name} ${lastName}`}
					subheader={email}
				/>
				<CardActions disableSpacing>
					<IconButton aria-label="editar cadastro">
						<EditIcon />
					</IconButton>
					<IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>

			<ModalConfirm
            open={openModal}
            onClose={handleToggleOpenModal}
            onConfirm={handleConfirmModal}
            title="Tem certeza que deseja excluir esse cadastro?"
            message="Ao confirmar não será possível reverter essa operação."
         />
		</>
   )
}

export default CustomerCard
