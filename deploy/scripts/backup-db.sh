#!/bin/bash

# Database Backup Script for Billkar ERP
# Retention logic: Keeps backups for 7 days

# Configuration
BACKUP_DIR="/var/backups/billkar"
DB_NAME=${DB_NAME:-"accounting_db"}
DB_USER=${DB_USER:-"root"}
DB_PASS=${DB_PASS:-""}
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_$TIMESTAMP.sql"
LOG_FILE="$BACKUP_DIR/backup.log"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "[$(date)] Starting backup of $DB_NAME..." >> "$LOG_FILE"

# Perform backup using mysqldump
if mysqldump -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" > "$BACKUP_FILE"; then
    # Compress the backup
    gzip "$BACKUP_FILE"
    echo "[$(date)] Backup completed and compressed: ${BACKUP_FILE}.gz" >> "$LOG_FILE"
    
    # Retention logic: Delete backups older than 7 days
    find "$BACKUP_DIR" -type f -name "*.sql.gz" -mtime +7 -delete
    echo "[$(date)] Retention cleanup completed." >> "$LOG_FILE"
else
    echo "[$(date)] ERROR: Backup of $DB_NAME failed!" >> "$LOG_FILE"
    exit 1
fi
