import { useState } from 'react'

import {
   Card,
   CardHeader,
   CardActions,
   Avatar,
   IconButton,
   CircularProgress,
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

const CustomerCard = ({
   id,
   name,
   lastName,
   email,
   avatar,
   className,
   onRemoveCustomer,
	onEditCustomer
}) => {
   const classes = useStyles()

   const [openModal, setOpenModal] = useState(false)
   const [isLoading, setIsLoading] = useState(false)

   const handleToggleOpenModal = () => {
      setOpenModal(!openModal)
   }

   const handleConfirmModal = id => {
	
      onRemoveCustomer(id, setIsLoading)

      handleToggleOpenModal()
   }

   const handleRemoveCustomer = () => {
      handleToggleOpenModal()
   }


	const handleEditCustomer = id => {
		onEditCustomer(id)
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
               <IconButton 
						aria-label="editar cadastro"
						onClick={() => handleEditCustomer(id) }
					>
                  <EditIcon />
               </IconButton>
               <IconButton
                  aria-label="remover cadastro"
                  onClick={handleRemoveCustomer}
               >
                  <DeleteIcon />
                  {isLoading && (
                     <CircularProgress
                        size={30}
                        sx={{
                           color: 'green',
                           position: 'absolute',
                           top: '50%',
                           left: '50%',
                           marginTop: '-15px',
                           marginLeft: '-15px',
                        }}
                     />
                  )}
               </IconButton>
            </CardActions>
         </Card>

         <ModalConfirm
            open={openModal}
            onClose={handleToggleOpenModal}
            onConfirm={() => handleConfirmModal(id)}
            title="Tem certeza que deseja excluir esse cadastro?"
            message="Ao confirmar não será possível reverter essa operação."
         />
      </>
   )
}

export default CustomerCard
